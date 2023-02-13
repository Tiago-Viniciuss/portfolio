    const burguer = document.getElementById('burguer');

    function toggleMenu() {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
    }

    burguer.addEventListener('click', toggleMenu);

    function openMenu() {
        if (nav.style.display == 'flex') {
            nav.style.display = 'none'
        } else {
            nav.style.display = 'flex'
        }

    }


/*function resizeWindow() {
    if (window.innerWidth >= 1200) {
        nav.style.display = 'flex'
    } else {
        nav.style.display = 'none'
    }
}*/