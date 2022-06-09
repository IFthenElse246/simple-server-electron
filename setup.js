const {app, BrowserWindow, screen} = require('electron');
const path = require('path');

function boot() {
    win = new BrowserWindow({
        title: "Simple Server",
        icon: path.join('assets','SimpleServerIcon.ico'),
        frame: false,
        "webPreferences": {
            devTools : true,
            enableRemoteModule: true,
            nodeIntegration: true
        }
    });
    win.loadFile('index.html')
    win.on('closed', () => {
        win = null
    })
    require('@electron/remote/main').initialize()
}

app.whenReady().then(boot)

app.on('window-all-closed', () => app.quit());