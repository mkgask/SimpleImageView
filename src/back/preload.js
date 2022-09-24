const { contextBridge, ipcRenderer } = require('electron')



// ダークテーマ対応
contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => { return ipcRenderer.invoke('dark-mode:toggle') },
    system: () => { ipcRenderer.invoke('dark-mode:system') }
})



// 初期状態のDOMドキュメントに介入する場合はDOMContentLoadedイベントで行う
window.addEventListener('DOMContentLoaded', () => {
    /*
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }

    document.write('test')
    */
})


