const {app, BrowserWindow, screen} = require('electron');
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
            nodeIntegration: true
        }
    });
    win.loadFile('index.html')
    win.on('closed', () => {
        win = null
    })
    
}

app.whenReady().then(boot)

app.on('window-all-closed', () => app.quit());