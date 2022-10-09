


let isMenuOpen = false

const classname_active = 'active'
const classname_inactive = 'inactive'


document.addEventListener('click', () => {
    const nav = document.getElementById('nav')
    const aside = document.getElementById('aside')

    isMenuOpen = !isMenuOpen

    if (isMenuOpen) {
        if (!nav.classList.contains(classname_active)) {
            nav.classList.add(classname_active)
        }

        if (nav.classList.contains(classname_inactive)) {
            nav.classList.remove(classname_inactive)
        }

        if (!aside.classList.contains(classname_active)) {
            aside.classList.add(classname_active)
        }

        if (aside.classList.contains(classname_inactive)) {
            aside.classList.remove(classname_inactive)
        }
    } else {
        if (!nav.classList.contains(classname_inactive)) {
            nav.classList.add(classname_inactive)
        }

        if (nav.classList.contains(classname_active)) {
            nav.classList.remove(classname_active)
        }

        if (!aside.classList.contains(classname_inactive)) {
            aside.classList.add(classname_inactive)
        }

        if (aside.classList.contains(classname_active)) {
            aside.classList.remove(classname_active)
        }
    }
})
