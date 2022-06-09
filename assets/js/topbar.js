const win = require('@electron/remote').getCurrentWindow()

document.getElementById("close").addEventListener('click', closeWindow)

function closeWindow() {
    win.close()
}
