function openMenu() {

    if(menu.style.display == 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }

}

function resizeWindow() {
    if (window.innerWidth >= 1200) {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
}