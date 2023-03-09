const path = require('path')
const { BrowserWindow, app } = require('electron');
// import { electronServer } from '../client/src/data/server';




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
  win.loadURL('http://localhost:4000/');
}

app.whenReady().then(createWindow);


