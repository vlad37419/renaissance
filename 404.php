<?php require_once 'header.php'; ?>
<section class="not-found section-offset">
    <div class="not-found__container container">
        <picture class="not-found__picture">
            <img src="/assets/img/404.svg" alt="" class="not-found__img">
        </picture>
        <h1 class="not-found__title page-title">
            Страница не найдена
        </h1>
        <p class="not-found__descr section-descr">
            Такой страницы не существует! Перейдите на главную страницу или воспользуйтесь поиском
        </p>
        <div class="not-found__group">
            <form action="#" class="not-found__search top-bar__search search-top">
                <label class="search-top__label">
                    <input placeholder="Искать на сайте" type="text" class="search-top__input">
                </label>
                <button class="search-top__submit">
                    <svg class="search-top__submit-icon" width="22" height="22" viewBox="0 0 22 22" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6663 18.8106L12.1763 13.3261C11.7216 13.712 11.1899 14.0131 10.5813 14.2293C9.97262 14.4455 9.32208 14.5536 8.62968 14.5536C6.95165 14.5536 5.53119 13.9715 4.36833 12.8075C3.20546 11.6433 2.62402 10.2388 2.62402 8.59376C2.62402 6.94875 3.20608 5.54418 4.37018 4.38008C5.53427 3.21599 6.94265 2.63394 8.59531 2.63394C10.248 2.63394 11.6525 3.21599 12.809 4.38008C13.9654 5.54418 14.5437 6.94989 14.5437 8.5972C14.5437 9.25916 14.4395 9.89296 14.2311 10.4986C14.0227 11.1042 13.71 11.6726 13.2932 12.2036L18.8291 17.6937C18.9849 17.8446 19.0627 18.0266 19.0627 18.2398C19.0627 18.453 18.9779 18.6426 18.8082 18.8086C18.65 18.9694 18.4574 19.0497 18.2304 19.0497C18.0033 19.0497 17.8153 18.97 17.6663 18.8106ZM8.60871 12.9923C9.82681 12.9923 10.8603 12.5626 11.7091 11.7033C12.5579 10.844 12.9824 9.80752 12.9824 8.59376C12.9824 7.38001 12.5577 6.34349 11.7083 5.4842C10.8589 4.6249 9.82574 4.19525 8.60871 4.19525C7.37894 4.19525 6.33427 4.6249 5.4747 5.4842C4.61512 6.34349 4.18534 7.38001 4.18534 8.59376C4.18534 9.80752 4.61486 10.844 5.47389 11.7033C6.33292 12.5626 7.37786 12.9923 8.60871 12.9923Z"
                              fill="#071D26"/>
                    </svg>
                </button>
            </form>
            <a href="/" class="not-found__btn btn-main">
                На главную страницу
            </a>
        </div>
    </div>
</section>
<?php require_once 'footer.php'; ?>