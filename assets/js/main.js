function getHeight(el) {
    return el.offsetHeight;
}

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

    // gallery slider
    const gallerySliderCheck = document.querySelectorAll('.gallery__slider');

    if (gallerySliderCheck.length > 0) {
        const gallerySlider = new Swiper('.gallery__slider', {
            spaceBetween: 30,
            slidesPerView: 3,
            touchRatio: 0,
            grid: {
                rows: 2,
            },
        });
    }

    // reviews slider
    const reviewsSliderCheck = document.querySelectorAll('.reviews__slider');

    if (reviewsSliderCheck.length > 0) {
        const reviewsSlider = new Swiper('.reviews__slider', {
            spaceBetween: 90,
            slidesPerView: 3,
            touchRatio: 0,
        });
    }

    // accordion
    const accorOpenBtns = document.querySelectorAll('.accor-open');

    for (let i = 0; i < accorOpenBtns.length; i += 1) {
        let accorOpenBtn = accorOpenBtns[i];

        accorOpenBtn.addEventListener('click', function () {
            let accor = accorOpenBtn.closest('.accor');
            let accorFull = accor.querySelector('.accor-full');
            let accorFullContent = accor.querySelector('.accor-full-content');
            let accorFullContentHeight = getHeight(accorFullContent);

            if (accor.classList.contains('active')) {
                accor.classList.remove('active');
                accorFull.style.height = '0px';
            } else {
                document.querySelectorAll('.accor').forEach(function (el) {
                    el.classList.remove('active');
                    el.querySelector('.accor-full').style.height = '0px';
                });
                accor.classList.add('active');
                accorFull.style.height = accorFullContentHeight + 'px';
            }
        });
    }

    accorOpenBtns[0].click();

    // reviews slider
    const articlesSliderCheck = document.querySelectorAll('.articles__slider');

    if (articlesSliderCheck.length > 0) {
        const articlesSlider = new Swiper('.articles__slider', {
            spaceBetween: 60,
            slidesPerView: 3,
            touchRatio: 0,
        });
    }
});