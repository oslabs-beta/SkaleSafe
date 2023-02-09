const { BrowserWindow, app } = require('electron');

function createWindow(){
  const win = new BrowserWindow({
    // width: 1920,
    width: 1440,
    height: 1080,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: false,
    //   worldSafeExecuteJavascript: true,
      contextIsolation: true,
    },
    show: false,
  });
  win.loadURL('http://localhost:4000');
  win.once('ready-to-show', win.show)
}
app.whenReady().then(createWindow);