import {
  app,
  net,
  BrowserWindow,
  dialog,
  protocol,
  MessageBoxOptions,
} from 'electron';
import { autoUpdater, UpdateDownloadedEvent } from 'electron-updater';
import * as winStateKeeper from 'electron-window-state';
import * as path from 'path';
import * as url from 'url';
import { serve } from './utils';

import { tray } from './tray';
import { serverInfo } from './samp/lars.samp';
import { IpcHandler } from './ipc/lars.ipc';

/**
 * Init main window
 *
 * @type {BrowserWindow}
 */
export let win: BrowserWindow | null = null;
/**
 * Prevents second instnce creating
 *
 * @type {boolean}
 */
const lock: boolean = app.requestSingleInstanceLock();
app.setAppUserModelId('ru.nmnd.lars');
/**
 * Init splash window
 *
 * @type {BrowserWindow}
 */
export let splash: BrowserWindow | null = null;
/**
 * Creates splash window
 */
function splashWindow() {
  splash = new BrowserWindow({
    width: 450,
    height: 300,
    backgroundColor: '#3A3F52',
    resizable: false,
    icon: path.join(__dirname, '../src/assets/icons/favicon.ico'),
    frame: false,
    show: false,
    webPreferences: {
      contextIsolation: true,
      allowRunningInsecureContent: true
    }
  });
  splash.center();
  splash.setMenu(null);
  splash.loadURL(
    url.format({
      pathname: path.join(__dirname, '../dist/splash.html'),
      protocol: 'file:'
    })
  );
  splash.once('ready-to-show', () => {
    splash!.show();
    splash!.webContents.send('loading-state', 'Загрузка основного модуля', 30);
  });
  splash.on('closed', () => {
    splash = null;
  });
}

/**
 * Creates main window
 */
function createWindow(): BrowserWindow {
  /**
   * Window state manager. Keeps window size, position etc.
   *
   * @type {winStateKeeper.State}
   */
  const state: winStateKeeper.State = winStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 600
  });

  win = new BrowserWindow({
    x: state.x,
    y: state.y,
    width: state.width,
    height: state.height,
    minHeight: 580,
    minWidth: 950,
    title: 'LARS',
    show: false,
    frame: false,
    icon: path.join(__dirname, '../dist/lars/browser/assets/icons/favicon.ico'),
    backgroundColor: '#3A3F52',
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      webSecurity: serve ? false : true,
      allowRunningInsecureContent: true,
      contextIsolation: false // false if you want to run 2e2 test with Spectron
    }
  });

  /**
   * Main window Ready-To-Show event handler
   */
  win.once('ready-to-show', () => {
    if (!serve) {
      splash!.webContents.send('loading-state', 'Проверка наличия обновлений', 40);
      autoUpdater.checkForUpdatesAndNotify();
    }
    if (splash) {
      splash.webContents.send('loading-state', 'Проверка токена авторизации', 85);
      setTimeout(() => {
        splash!.close();

        if (win) {
          win.show();
          state.manage(win);
        }
      }, 500);
    }
  });

  if (serve) {
    win.webContents.openDevTools();
    require('electron-reloader')(module);
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL('https://libertyapp.nmnd.ru');
  }

  //TODO: Необходимо разделить доступ до локальных ресурсов для dev и prod 
  protocol.handle('lars', (request) => {
    const filePath = request.url.slice('lars://'.length);
    let dirUrl = [__dirname, '../lars/public', filePath];
    const [root] = filePath.split('/');

    if (root === 'i18n') {
      dirUrl = [__dirname, '../../libs/i18n-langs', filePath.slice('i18n'.length)];
    }

    const sourcePath = path.join(...dirUrl);
    const sourceUrl = url.pathToFileURL(sourcePath).toString();
    
    return net.fetch(sourceUrl);
  });


  win.on('show', (_event: any) => {
    if (tray) {
      tray.destroy();
    }
  });
  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
    serverInfo.unsubscribe();
    app.quit();
  });

  win.webContents.setWindowOpenHandler((details: Electron.HandlerDetails) => {
    return {
      action: 'allow',
      url: details.url,
      icon: path.join(__dirname, '../dist/lars/browser/assets/icons/favicon.ico'),
      overrideBrowserWindowOptions: {
        frame: false,
        fullscreenable: false,
        webPreferences: {
          nodeIntegration: true,
          webSecurity: serve ? false : true,
          allowRunningInsecureContent: true,
          contextIsolation: false
        }
      }
    };
  });

  return win;
}

/** IPC Handlers */
new IpcHandler();

/** AutoUpdater handlers */
autoUpdater.on('update-available', () => {
  if (!win) return;
  win.webContents.send('update_available');
});
autoUpdater.on('checking-for-update', () => {
  if (!splash) return;
  splash.webContents.executeJavaScript(`changeStatus("Проверка наличия обновлений:", 20);`, true);
});
autoUpdater.on('update-downloaded', () => {
  if (!win) return;
  win.webContents.send('update_downloaded');
});
autoUpdater.on('update-downloaded', (event: UpdateDownloadedEvent) => {
  const dialogOpts: MessageBoxOptions = {
    type: 'info',
    buttons: ['Перезапустить', 'Отложить'],
    title: 'Обновление приложения',
    message: process.platform === 'win32' ? (event.releaseNotes ?? '').toString() : event.releaseName ?? '',
    detail: 'Новая версия уже загружена. Перезапустите приложение, чтобы принять изменения.'
  };

  dialog.showMessageBox(dialogOpts).then((returnValue) => {
    if (returnValue.response === 0) {
      autoUpdater.quitAndInstall();
    }
  });
});
autoUpdater.on('error', (message) => {
  console.error('Ошибка при попытке обновить приложение');
  console.error(message);
  dialog.showErrorBox('Ошибка при попытке обновить приложение', message.message);
});
/********************************************/

try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  // Added 400 ms to fix the black background issue while using transparent window.
  // More detais at https://github.com/electron/electron/issues/15947
  if (!lock) {
    app.quit();
  } else {
    app.on(
      'second-instance',
      (_event: Electron.Event, _commandLine: string[], _workingDirectory: string) => {
        // Someone tried to run a second instance, we should focus our window.
        if (!win) {
          return;
        }
        if (win.isMinimized()) {
          win.restore();
        }
        if (!win.isVisible()) {
          win.show();
        }
        win.focus();
      }
    );

    app.on('ready', () => {
      setTimeout(() => { 
        splashWindow();
        createWindow();
      }, 400);
    });

    // Quit when all windows are closed.
    app.on('window-all-closed', () => {
      // On OS X it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });

    app.on('activate', () => {
      // On OS X it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (win === null) {
        createWindow();
      }
    });
    if (serve) {
      app.on(
        'certificate-error',
        (
          event: Electron.Event,
          _webContents: Electron.WebContents,
          _url: string,
          _error: string,
          _certificate: Electron.Certificate,
          callback: (isTrusted: boolean) => void
        ) => {
          // On certificate error we disable default behaviour (stop loading the page)
          // and we then say "it is all fine - true" to the callback
          event.preventDefault();
          callback(true);
        }
      );
    }
  }
} catch (err) {
  console.error(err);
  dialog.showErrorBox('Ошибка', err);
}
