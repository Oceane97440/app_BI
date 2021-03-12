//const electron = require('electron');
const {app,BrowserWindow}=require('electron')
//const app = require('./app');
 
let window;
 
function createWindow() {
    /* Créer une fenêtre de 800px par 600px sans bordures */
    window = new BrowserWindow({
        width: 1300,
        height: 900,
        //icon : __dirname + '/Icon/analytics.ico',
       //frame: false
    });
 
    /* Si vous décommentez cette ligne, vous verrez la console de débug Chrome */
     // window.webContents.openDevTools(); 
 
    /* Display the homepage of the server */
    window.loadURL('https://asbreporting.herokuapp.com/');
 
    /* Lorsque la fenêtre est fermée, on l'indique au système */
    window.on('closed', () => {
        window = null;
    });
}
 
/* On attend qu'Electron.js soit prêt pour créer la fenêtre */
app.on('ready',createWindow)
 
/* Cette fonction arrête totalement l'application 
   lorsque toutes les fenêtres sont fermées */
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
//intallation 1 fois
if (require('electron-squirrel-startup')) return app.quit();
/* Fonction utile pour MacOS */
app.on('activate', () => {
    if (window === null) {
        createWindow();
    }
});

