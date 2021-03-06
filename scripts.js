const myApp = {};

myApp.toggleMenu = function(){
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuList = document.querySelector('.menu-list');
    const ulElement = document.querySelector('ul');
    const logoMenu = document.querySelector('.logo-menu')
    
    function handleClick() {
        hamburgerMenu.classList.remove('toggle');
        menuList.classList.remove('show');
    }

    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('toggle');
        menuList.classList.toggle('show');
    })

    logoMenu.addEventListener('click', handleClick);
    ulElement.addEventListener('click', handleClick);
}

// scroll to top button

myApp.handleScroll = function () {

    const scrollButton = document.querySelector('.scroll-top');
    const rootEl = document.documentElement;
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;

    document.addEventListener('scroll', function() {
        if ((rootEl.scrollTop / scrollTotal) > 0.20) {
            scrollButton.classList.add('active')
        } else {
            scrollButton.classList.remove('active')
        }
    })

    scrollButton.addEventListener('click', function() {
        rootEl.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}

myApp.init = function(){
    myApp.toggleMenu();
    myApp.handleScroll();
}

myApp.init();

