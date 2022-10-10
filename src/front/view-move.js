


const prev_button = document.getElementsByClassName('image-prev')
const next_button = document.getElementsByClassName('image-next')

for (const elem of prev_button) {
    elem.addEventListener('click', (ev) => {
        ev.preventDefault()
        ev.stopPropagation()

        window.prevView.prevView()
    })
}

for (const elem of next_button) {
    elem.addEventListener('click', (ev) => {
        ev.preventDefault()
        ev.stopPropagation()

        window.nextView.nextView()
    })
}

/*
prev_button.addEventListener('click', (ev) => {
    ev.preventDefault()
    ev.stopPropagation()

    window.prevView.prevView()
})

next_button.addEventListener('click', (ev) => {
    ev.preventDefault()
    ev.stopPropagation()

    window.nextView.nextView()
})
*/
