var body = document.querySelector('body')
var menuToggle = document.querySelector('#toggle-header-menu-mobile');
var menuContainer = document.querySelector('#header-menu-mobile');

menuToggle.onclick = function() {
    menuContainer.classList.toggle('open');
    menuToggle.classList.toggle('is-active')
    body.classList.toggle('mobile-menu-open')
}
