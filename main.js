const electron = require ('electron');
const { app, BrowserWindow } = require ('electron');

let win;

function createWindow () {
    win = new BrowserWindow({
        width: 325,
        height: 389,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html');

    // win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})

app.on('activate', () => {
    // На MacOS обычно пересоздают окно в приложении,
    // после того, как на иконку в доке нажали и других открытых окон нету.
    if (win === null) {
        createWindow()
    }
})