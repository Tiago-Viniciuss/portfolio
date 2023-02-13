    const burguer = document.getElementById('burguer');

    function toggleMenu() {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
    }

    burguer.addEventListener('click', toggleMenu);



function resizeWindow() {
    if (window.innerWidth >= 1200) {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
}