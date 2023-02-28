document.addEventListener('DOMContentLoaded', function () {
    // dropdown menu
    const menuBtns = document.querySelectorAll('button.menu__link');
    const menuSubBtns = document.querySelectorAll('button.menu__sub-link');

    if (menuBtns.length > 0) {
        menuBtns.forEach(function (menuBtn) {
            menuBtn.addEventListener('click', function () {
                menuSubBtns.forEach(el => {
                    el.closest('.menu__sub-item').classList.remove('active');
                });
                menuBtns.forEach(el => {
                    if (el != this) {
                        el.closest('.menu__item').classList.remove('active');
                    }
                });
                menuBtn.closest('.menu__item').classList.toggle('active');
            });

            window.addEventListener('click', function (e) {
                const target = e.target;
                if (!target.closest('.menu__item')) {
                    menuBtn.classList.remove('active');
                }
            });
        });
    }

    if (menuSubBtns.length > 0) {
        menuSubBtns.forEach(function (menuBtn) {
            menuBtn.addEventListener('click', function () {
                menuSubBtns.forEach(el => {
                    if (el != this) {
                        el.closest('.menu__sub-item').classList.remove('active');
                    }
                });
                menuBtn.closest('.menu__sub-item').classList.add('active');
            });
        });
    }

    window.addEventListener('click', function (e) {
        const target = e.target;

        if (!target.closest('.menu__sub-item')) {
            menuSubBtns.forEach(el => {
                el.closest('.menu__sub-item').classList.remove('active');
            });
        }

        if (!target.closest('.menu__item')) {
            menuBtns.forEach(el => {
                el.closest('.menu__item').classList.remove('active');
            });
        }
    });

    // documents slider
    const documentsSliderCheck = document.querySelectorAll('.documents__slider');

    if (documentsSliderCheck.length > 0) {
        const documentsSlider = new Swiper('.documents__slider', {
            spaceBetween: 30,
            slidesPerView: 4,
            touchRatio: 0,
        });
    }

    // specialists slider
    const specialistsSliderCheck = document.querySelectorAll('.specialists__slider');

    if (specialistsSliderCheck.length > 0) {
        const specialistsSlider = new Swiper('.specialists__slider', {
            spaceBetween: 30,
            slidesPerView: 3,
            touchRatio: 0,
        });
    }
});