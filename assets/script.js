let headerMenu = document.getElementsByClassName("header-menu");
let headerRespBtn = document.getElementsByClassName("header__resp-btn");
let body = document.getElementsByTagName("body");

headerRespBtn[0].addEventListener('click', () => {
        body[0].classList.toggle('fixed');
        headerMenu[0].classList.toggle('header-menu_active');
    }
);

let goTopBtn = document.querySelector('.arrow-up');

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
}

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        goTopBtn.classList.add('arrow-up_show');
    } else {
        goTopBtn.classList.remove('arrow-up_show');
    }
});
goTopBtn.addEventListener('click', backToTop);