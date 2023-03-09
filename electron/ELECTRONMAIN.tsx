const path = require('path')
const { BrowserWindow, app } = require('electron');




function createWindow(){
  const win = new BrowserWindow({
    width: 1440,
    height: 1080,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: false,
    //   worldSafeExecuteJavascript: true,
      contextIsolation: true,
    },
  });
  win.;
}

app.whenReady().then(createWindow);


