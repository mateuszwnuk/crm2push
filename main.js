const { app, Tray, Notification } = require('electron')
const path = require('path')

let tray = null

app.whenReady().then(() => {
  tray = new Tray(path.join(__dirname, 'iconTemplate.png'))
  tray.setToolTip('CRM Push Desktop')

  setTimeout(() => {
    new Notification({
      title: 'CRM – test',
      body: 'Electron + macOS + VS Code działa 🎉'
    }).show()
  }, 3000)
})
