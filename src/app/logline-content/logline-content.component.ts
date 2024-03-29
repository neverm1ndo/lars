import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from '@lars/user/user.service';
import { Process } from '@lars/shared/components/line-process/log-processes';
import { IContentData, IUserData } from '@lars/interfaces';
import { faSearch, faUserAlt, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
enum ContentTemplate {
  BANNED,
  AUTH,
  MUTED,
  DEATH,
  CN,
}

@Component({
  selector: 'logline-content',
  templateUrl: './logline-content.component.html',
  styleUrls: ['./logline-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoglineContentComponent {

  constructor(
    private _user: UserService,
  ) { }

  public fa = {
    faSearch,
    faUserAlt,
    faSkullCrossbones,
  }

  @Input('content') content: IContentData;
  @Input('type') process: Process;

  private _isAuth(): boolean {
    switch (this.process.control) {
      case 'authCorrectAdm': return true;
      case 'authIncorrect': return true;
      case 'authCorrectUsr': return true;
      default: {
        return false;
      }
    }
  }

  private _isBanned(): boolean {
    const banned = ['disconnectBan', 'disconnectKick']
    return banned.includes(this.process.control);
  }
  private _isMuted(): boolean {
    const banned = ['chatHandBlock'];
    return banned.includes(this.process.control);
  }
  private _isDeath(): boolean {
    return this.process.control === 'dthKilled';
  }
  private _isCNResponse(): boolean {
    return this.process.control === 'CnResSuccess';
  }

  userLink(id: number) {
    this._user.openUserForumProfile(id);
  }

  setTemplate(): string {
    switch (true) {
      case this._isBanned(): return ContentTemplate[0];   
      case this._isAuth():  return ContentTemplate[1];
      case this._isMuted(): return ContentTemplate[2];
      case this._isDeath(): return ContentTemplate[3];
      case this._isCNResponse(): return ContentTemplate[4];
    }
  }

}
