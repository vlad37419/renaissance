function getHeight(el) {
    return el.offsetHeight;
}

document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('.body');


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
    const ACCORDION_LIST          = 'data-accordion-list'
    const ACCORDION_BUTTON        = 'data-accordion-button'
    const ACCORDION_ARROW         = 'data-accordion-arrow'
    const ACCORDION_CONTENT       = 'data-accordion-content'
    const SECTION_OPENED          = 'active'
    const ICON_ROTATED            = 'rotated'

    class Accordion {
        static apply(accordionNode) {
            if (!accordionNode) {
                return
            }

            const acc = new Accordion()
            acc.accordion = accordionNode
            accordionNode.onclick = acc.onClick.bind(acc)
        }

        handleClick(button) {
            const innerSection = button.nextElementSibling
            const isOpened = innerSection.classList.contains(SECTION_OPENED)

            if (isOpened) {
                this.close(innerSection)
                return
            }
            this.open(innerSection)
        }

        open(section) {
            const accordion = section.querySelector(`[${ACCORDION_CONTENT}`).closest('.accor');
            const accordionContent = section.querySelector(`[${ACCORDION_CONTENT}`)
            const accordionList = accordionContent.querySelector(`[${ACCORDION_LIST}`)
            const innerSectionHeight = accordionContent.clientHeight
            let countOfScrollHeight = 0;
            const allElementContentData = section.querySelectorAll(`[${ACCORDION_CONTENT}`)
            accordion.classList.add(SECTION_OPENED)
            section.classList.add(SECTION_OPENED)
            this.rotateIconFor(section.previousElementSibling)

            for (const item of allElementContentData) {
                countOfScrollHeight = countOfScrollHeight + item.scrollHeight;
            }

            if (accordionContent.contains(accordionList)) {
                section.style.maxHeight = `${innerSectionHeight + countOfScrollHeight}px`
                return
            }
            section.style.maxHeight = `${innerSectionHeight}px`
        }

        close(section) {
            const accordion = section.querySelector(`[${ACCORDION_CONTENT}`).closest('.accor');
            section.style.maxHeight = 0
            accordion.classList.remove(SECTION_OPENED)
            section.classList.remove(SECTION_OPENED)
            this.rotateIconFor(section.previousElementSibling)
        }

        rotateIconFor(button) {
            const rotatedIconClass = ICON_ROTATED
            const arrowElement = button.dataset.hasOwnProperty('accordionArrow') ?
                button :
                button.querySelector(`[${ACCORDION_ARROW}]`)

            if (!arrowElement) {
                return
            }

            const isOpened = arrowElement.classList.contains(rotatedIconClass)
            if (!isOpened) {
                arrowElement.classList.add(rotatedIconClass)
                return
            }
            arrowElement.classList.remove(rotatedIconClass)
        }

        onClick(event) {
            let button = event.target.closest(`[${ACCORDION_BUTTON}]`)
            if (button && button.dataset.accordionButton !== undefined) {
                this.handleClick(button)
            }
        }
    }

    Accordion.apply(document.querySelector(`[${ACCORDION_LIST}`))

    const accorWrapperList = document.querySelectorAll('.accor-wrapper');

    if (accorWrapperList.length > 0) {
        accorWrapperList.forEach(function (elem) {
            elem.querySelector('.accor-open').click();
        });
    }

    // reviews slider
    const articlesSliderCheck = document.querySelectorAll('.articles__slider');

    if (articlesSliderCheck.length > 0) {
        const articlesSlider = new Swiper('.articles__slider', {
            spaceBetween: 60,
            slidesPerView: 3,
            touchRatio: 0,
        });
    }

    // header menu mobile
    let headerMenuButton = document.querySelector('.menu-burger');
    let headerMenu = document.querySelector('.mobile-menu');

    headerMenuButton.addEventListener('click', function () {
        headerMenuButton.classList.toggle('active');
        headerMenu.classList.toggle('active');
        body.classList.toggle('lock');
    });
});