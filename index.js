const { app, BrowserWindow} = require('electron')

let janelaPrincipal

app.on('ready', () => {
    janelaPrincipal = new BrowserWindow({
        width: 700,
        height: 500,
        minHeight: 500,
        minWidth: 700,
    })
    janelaPrincipal.loadURL(`file://${__dirname}/index.html`)
})