


// ダークテーマ対応
/*
document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    let isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})
*/

// ダークテーマ対応
/*
document.getElementById('reset-to-system').addEventListener('click', async () => {
    await window.darkMode.system()
    document.getElementById('theme-source').innerHTML = 'System'
})
*/

// ファイルドロップ対応
document.addEventListener('drop', (ev) => {
    ev.preventDefault()
    ev.stopPropagation()

    // Files以外のドロップには対応しない
    for (const type of ev.dataTransfer.types) {
        if ( type !== 'Files' ) { return false; }
    }

    for (const file of ev.dataTransfer.files) {
        // 画像以外のドロップには対応しない
        if ( !file.type.match( /^image\/.*/ ) ) { return false; }

        const element = document.getElementById('main-image')
        element.src = file.path
    }
})

document.addEventListener('dragover', (e) => {
    e.preventDefault()
    e.stopPropagation()
})



// 関連付けを開く対応
window.defaultImage.defaultImage((ev, path) => {
    if (!path) return
    document.getElementById('main-image').src = path
})


