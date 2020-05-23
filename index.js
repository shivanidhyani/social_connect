const electron = require("electron")

function createWindow() {
    let win= new electron.BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration:true
        }
    })
    win.loadFile('index.html')
   // win.webContents.openDevTools()
   win.removeMenu()
}
electron.app.whenReady().then(createWindow)