const electron = require('electron')
const electronStore = require('electron-store')



// 画面サイズを取得
const screen = electron.screen
const size = screen.getPrimaryDisplay().size



const defaultSize = {
    w: 960,
    h: 540
}



module.exports = new electronStore({
    configFileMode: 0o666,

    defaults: {
        x: Math.floor(size.width / 2) - Math.floor(defaultSize.w / 2),
        y: Math.floor(size.height / 2) - Math.floor(defaultSize.h / 2),
        w: defaultSize.w,
        h: defaultSize.h,
        viewing_file: ''
    }
})


