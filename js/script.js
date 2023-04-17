new Accordion('.accordion');

document.addEventListener("DOMContentLoaded", function() {
    const headerButton = document.querySelector(".header__button");
    const headerWrapperSearch = document.querySelector(".header__wrapper-search");
    const searchClose = document.querySelector(".search-close");
    const imgSearch = document.querySelector(".header__button");

    headerButton.addEventListener("click", function() {
        headerWrapperSearch.classList.add("search-active");
        imgSearch.classList.add("img-padding");
        headerButton.classList.add("header__button--color");
    });

    searchClose.addEventListener("click", function() {
        headerWrapperSearch.classList.remove("search-active");
        imgSearch.classList.remove("img-padding");
        headerButton.classList.remove("header__button--color");
        document.querySelector('input').value = "";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const headerForm = document.querySelector(".header__button-form");
    const headerPopup = document.querySelector(".popup_block");
    const formClose = document.querySelector(".form-close");

    headerForm.addEventListener("click", function() {
        headerPopup.classList.add("search-active");
        // headerButton.classList.add("header__button--color");
    });

    formClose.addEventListener("click", function() {
        headerPopup.classList.remove("search-active");
        document.querySelector('input').value = "";

    });
});

/* Показать еще*/

const btnMore = document.querySelector(".podcasts__btn-more");
const podcastsItem = document.querySelectorAll(".podcasts__item");

btnMore.addEventListener("click", () => {
    podcastsItem.forEach(el => { el.classList.add("podcasts__item--visible") });
    btnMore.closest(".podcasts__btn__box").classList.add("podcasts__btn__box--hidden");

});

/*селект*/
const element = document.querySelector('.select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom'
});

/*ТАБЫ*/
let tabsBtn = document.querySelectorAll('.how__item__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn) { btn.classList.remove('how__item__btn--active') });
        e.currentTarget.classList.add('how__item__btn--active');

        tabsItem.forEach(function(element) { element.classList.remove('tabs-item--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});



function toggle(el) {
    el.style.classList.toggle('btn__plus-2--active');
}







const swiper = new Swiper('.swiper', {


    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1266: {
            slidesPerView: 4,
            spaceBetween: 40
        },
    },



    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});


(() => {
    function setBurger(params) {
        const btn = document.querySelector(`.${params.btnClass}`);
        const menu = document.querySelector(`.${params.menuClass}`);

        menu.addEventListener("animationend", function() {
            if (this.classList.contains(params.hiddenClass)) {
                this.classList.remove(params.activeClass);
                this.classList.remove(params.hiddenClass);
            }
        });

        btn.addEventListener("click", function() {
            this.classList.toggle(params.activeClass);

            if (!menu.classList.contains(params.activeClass) &&
                !menu.classList.contains(params.hiddenClass)
            ) {
                menu.classList.add(params.activeClass);
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add(params.hiddenClass);
                document.body.removeAttribute('style');
            }
        });
    }

    // здесь мы вызываем функцию и передаем в нее классы наших элементов
    setBurger({
        btnClass: "js-burger", // класс бургера
        menuClass: "js-menu-wrap", // класс меню
        activeClass: "is-active", // класс открытого состояния
        hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
    });
})();


$('.header__bottom__btn').click(function() {
    $(".header__bottom-hidden").fadeToggle(100);
});


// More players mobile

let headerBottom = document.querySelector('.header__bottom-mobile');
let headerMore = document.querySelector('.header__bottom__btn');
let headerWrap = document.querySelector('.header__bottom-wrapper');

headerMore.addEventListener('click',
    function() {
        headerBottom.classList.toggle('header__bottom-mobile--active');
        headerWrap.classList.toggle('header__bottom-wrapper--active');
    }
)



// Play / Pause buttons

const headerBtnArchive = document.querySelector('.header-btn--archive');
const BtnPlay = document.querySelector('.header-btn__play');
const BtnPause = document.querySelector('.header-btn__pause');

headerBtnArchive.addEventListener('click',
    function() {
        BtnPlay.classList.toggle('header-btn__play--active');
        BtnPause.classList.toggle('header-btn__pause--active');

    }
);

const headerBtnLive = document.querySelector('.header-btn--live');
const BtnPlayLive = document.querySelector('.header-btn-live__play');
const BtnPauseLive = document.querySelector('.header-btn-live__pause');

headerBtnLive.addEventListener('click',
    function() {
        BtnPlayLive.classList.toggle('header-btn-live__play--active');
        BtnPauseLive.classList.toggle('header-btn-live__pause--active');

    }
)

// Form validator

new window.JustValidate('.about__form', {
    colorWrong: 'red',
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        },
        mail: {
            required: true,
            email: true
        },
    },
    messages: {
        name: {
            required: 'Ошибка',
            minLength: 'Ошибка',
            maxLength: 'Ошибка'
        },
        mail: {
            required: 'Ошибка',
            email: 'Ошибка'
        },
    },
});
