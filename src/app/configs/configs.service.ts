import { Injectable, Optional } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ApiService } from '@lars/api/api.service';
import { ToastService } from '@lars/toast.service';
import { ElectronService } from '@lars/core/services';
import { Router } from '@angular/router';

import { BehaviorSubject, Subject, Observable, combineLatest, from } from 'rxjs';
import { tap, filter, takeLast, switchMap } from 'rxjs/operators';

import { faTrash, faCopy, faInfo } from '@fortawesome/free-solid-svg-icons';

import { basename, dirname } from 'path';
import { UserService } from '@lars/user/user.service';

@Injectable()
export class ConfigsService {

  constructor(
    @Optional() private _electron: ElectronService,
    private _api: ApiService,
    private _toast: ToastService,
    private _router: Router,
    private _user: UserService
  ) { }

  public error: Subject<Error | null> = new Subject();
  
  public reloader$: BehaviorSubject<any> = new BehaviorSubject(null);
  public dprogress$: BehaviorSubject<number> = new BehaviorSubject(0);

  public stats$: BehaviorSubject<any> = new BehaviorSubject(null);
  public changed$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public loading: Subject<boolean> = new Subject();

  public path: string = '';

  public saveFrom$: Subject<null> = new Subject();

  getConfig(path: string): Observable<any> {
    return combineLatest([
      this._api.getConfigText(path),
      this._api.getFileInfo(path)
    ]);
  }

  saveFile() {
    this.saveFrom$.next(null);
  }

  saveFileAsBlob(path: string, blob: Blob): Observable<any> {
    const form: FormData = new FormData();
          form.append('path', dirname(path));
          form.append('file', blob, basename(path));
    return this._api.saveFile(form)
                    .pipe(
                        tap((event) => {
                          if (event.type === HttpEventType.UploadProgress) this.dprogress$.next(Math.round(100 * event.loaded / event.total));
                        }),
                        filter((event) => event instanceof HttpResponse),
                        takeLast(1)
                    );
  }

  public downloadFile(path: string): void {
    
    let filename: string = basename(path);
    
    const dialogOpts: Electron.SaveDialogOptions = {
      title: 'Сохранить карту как',
      buttonLabel: 'Сохранить',
      defaultPath: filename,
      filters: [
        { name: 'All Files', extensions: ['*'] }
      ]
    };

    this._electron.ipcRenderer.invoke('save-dialog', dialogOpts)
                              .then((res: Electron.SaveDialogReturnValue) => {
                                if (!res.filePath && res.canceled) return;
                                this._electron.ipcRenderer.send('download-file', { 
                                  remotePath: path, 
                                  localPath: res.filePath, 
                                  token: this._user.getCurrentUserInfo().token,
                                });
                              })
                              .catch(res => {
                                this._toast.show('warning', `Файл <b>${ res.filePath }</b> не был загружен`, res.message, faInfo);
                                console.error(res);
                              });
  }

  public getFileInfo(path: string) {
    return this._api.getFileInfo(path);
  }

  public toEmpty() {
    this._router.navigate(['/home/config-editor/empty']);
  }

  public reloadFileTree() {
    this.reloader$.next(null);
  }

  public async deleteFile(path: string): Promise<any> {
    const dialogOpts: Electron.MessageBoxOptions = {
      type: 'warning',
      buttons: ['Удалить', 'Отмена'],
      title: `Подтверждение удаления`,
      message: `Вы точно хотите удалить файл ${ path }? После подтверждения он будет безвозвратно удален с сервера.`,
    };
    from(this._electron.ipcRenderer.invoke('message-box', dialogOpts))
      .pipe(
        filter(({ response }) => response !== 1),
        switchMap(() => this._api.deleteMap(path))
      )
      .subscribe({
        next: () => {
          this._toast.show('success', `Файл <b>${ path }</b> удален с сервера`, null, faTrash);
        },
        error: (err) => {
          this._toast.show('danger', `Файл <b>${ path }</b> не был удален с сервера`, err, faTrash);
        },
        complete: () => {
          this.reloadFileTree();
        }
      })
  }

  pathToClipboard(path: string): void {
    this._electron.ipcRenderer.invoke('clipboard', path)
                              .then(() => {
                                this._toast.show('success', 'Путь скопирован в буффер обмена', null, faCopy);
                              });
  };
}
