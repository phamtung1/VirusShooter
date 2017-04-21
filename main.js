
const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')
const {webFrame} = require('electron')

let win

function createWindow() {
   win = new BrowserWindow({width: 800, height: 600})
    win.setMenu(null);
  //   win.setFullScreen(true);
   win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))
}

app.on('ready', createWindow)