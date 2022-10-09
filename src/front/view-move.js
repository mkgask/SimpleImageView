


const prev_button = document.getElementById('prev_button')
const next_button = document.getElementById('next_button')

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
