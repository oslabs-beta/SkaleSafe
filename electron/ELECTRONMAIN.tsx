const { BrowserWindow, app } = require('electron');

function createWindow(){
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: false,
    //   worldSafeExecuteJavascript: true,
      contextIsolation: true,
    },
  });
  win.loadURL('http://localhost:4000');
}

app.whenReady().then(createWindow);