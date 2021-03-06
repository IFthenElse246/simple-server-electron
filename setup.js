const {app, BrowserWindow, screen} = require('electron');
const enableWebContents = require('@electron/remote/main').enable
const path = require('path');

require('@electron/remote/main').initialize()

function boot() {
    win = new BrowserWindow({
        title: "Simple Server",
        icon: path.join(__dirname, 'assets','SimpleServerIcon.ico'),
        frame: false,
        "webPreferences": {
            devTools : true,
            enableRemoteModule: true,
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    //win.loadURL('https://codepen.io/helvetica/pen/BaYGyam')
    win.loadFile('index.html')
    win.on('closed', () => {
        win = null
    })
    enableWebContents(win.webContents);
}

app.whenReady().then(() => {
    boot()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })