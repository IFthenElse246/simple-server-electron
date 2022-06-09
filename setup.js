const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

function boot() {
    win = new BrowserWindow({
        title: "Simple Server",
        icon: path.join('assets','SimpleServerIcon.ico'),
        frame: false,
        "webPreferences": {
            "devTools" : true
        }
    });
    win.loadURL(url.format({
        pathname: 'index.html',
        slashes: true
    }))
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', boot);

