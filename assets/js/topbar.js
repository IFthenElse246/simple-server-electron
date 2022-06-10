document.addEventListener("DOMContentLoaded", function(event) {
    const win = require('@electron/remote').getCurrentWindow()

    document.getElementById("close").addEventListener('click', closeWindow)

    function closeWindow() {
        win.close()
    }

    document.getElementById("maximize").addEventListener('click', maximizeWindow)

    function maximizeWindow() {
        win.maximize();
    }

    document.getElementById("minimize").addEventListener('click', minimizeWindow)

    function minimizeWindow() {
        win.minimize();
    }


  });
