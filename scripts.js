const myApp = {};

myApp.toggleMenu = function(){
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuList = document.querySelector('.menu-list');
    const ulElement = document.querySelector('ul');

    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('toggle');
        menuList.classList.toggle('show');
    })

    ulElement.addEventListener('click', function () {
        hamburgerMenu.classList.remove('toggle');
        menuList.classList.remove('show');
    })
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

// instagram feed

myApp.instagramFeed = function() {
    var i, e, d = document, s = "script"; i = d.createElement("script"); i.async = 1;
    i.src = "https://cdn.curator.io/published/e44387c6-440c-48a3-a4ec-1225deeb629a.js";
    e = d.getElementsByTagName(s)[0]; e.parentNode.insertBefore(i, e);
}

myApp.init = function(){
    myApp.toggleMenu();
    AOS.init();
    myApp.handleScroll();
    myApp.instagramFeed();
}

myApp.init();

