const openMenu = () => {
    const menu = document.querySelector('.header-menu');
    menu.classList.toggle('visible');

    const icon = document.querySelector('.header-menu-mobile .material-icons');
    if (menu.classList.contains('visible')) {
        icon.innerHTML = "close";
    } else {
        icon.innerHTML = "list_alt";
    }
};

// Fermer automatiquement le menu mobile lorsqu'un lien est cliqué
document.querySelectorAll('.header-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.header-menu');
        if (menu.classList.contains('visible')) {
            openMenu();
        }
    });
});