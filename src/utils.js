const path = require('path')
const fs = require('fs/promises')
const jimp = require('jimp')

const store = require('./store')


const KB = 1024;
const MB = KB * KB;
const GB = MB * KB;



const fileSizeString = (filesize) => {
    if (GB < filesize) {
        return Math.round(filesize / GB) + ' GB';
    }

    if (MB < filesize) {
        return Math.round(filesize / MB) + ' MB';
    }

    if (KB < filesize) {
        return Math.round(filesize / KB) + ' KB';
    }
}



const changeViewFile = async (path, mainWindow) => {
    store.set({ viewingFile: path })

    // ファイルサイズ取得
    const stat = await fs.stat(path)

    // 画像の解像度取得
    jimp.read(path, (err, image) => {
        if (err) throw err

        mainWindow.webContents.send('viewImage', {
            path: path,
            filesize: fileSizeString(stat.size),
            imagesize: 'w' + image.bitmap.width + 'px h' + image.bitmap.height + 'px'
        })
    })
}



const previewsFile = async (viewingFile, mainWindow) => {
    const dirname = path.dirname(viewingFile)
    const viewFile = path.basename(viewingFile)
    let previewFile = ''

    const dir = await fs.opendir(dirname)

    for await (const dircurrent of dir) {
        if (viewFile === dircurrent.name ) {
            const viewPath = path.join(dirname, previewFile)
            changeViewFile(viewPath, mainWindow)
            return
        }

        previewFile = dircurrent.name
    }
}



const nextFile = async (viewingFile, mainWindow) => {
    const dirname = path.dirname(viewingFile)
    const viewFile = path.basename(viewingFile)
    let nextFile = false

    const dir = await fs.opendir(dirname)

    for await (const dircurrent of dir) {
        if (nextFile) {
            const viewPath = path.join(dirname, dircurrent.name)
            changeViewFile(viewPath, mainWindow)
            return
        }

        if (viewFile === dircurrent.name ) {
            nextFile = true
        }
    }
}



module.exports = {
    fileSizeString: fileSizeString,
    changeViewFile: changeViewFile,
    previewsFile: previewsFile,
    nextFile: nextFile
}
