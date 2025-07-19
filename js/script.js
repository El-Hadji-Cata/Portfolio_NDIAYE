const openMenu = ()=> {
    const menu = document.querySelector('.header-menu');
    menu.classList.toggle('visible')
    if(menu.classList.contains('visible')){
        document.querySelector('header .material-icons').innerHTML = "close";
    }else {
        document.querySelector('header .material-icons').innerHTML = "list_alt"
    }

}