document.addEventListener('DOMContentLoaded', function () {
    var sMenuButtonOpen = document.getElementById('sMenuButtonOpen');
    var sMenuButtonClose = document.getElementById('sMenuButtonClose');
    var sMenu = document.querySelector('.s-menu');
    var sOverlay = document.querySelector('.s-overlay');
    var sMenuContainer = document.querySelector('.s-menu__container');

    // Добавляем обработчик события клика на кнопку открытия
    sMenuButtonOpen.addEventListener('click', function () {
        sMenu.classList.add('s-menu--active');
        sOverlay.classList.add('s-overlay--active');
    });

    // Добавляем обработчик события клика на кнопку закрытия
    sMenuButtonClose.addEventListener('click', function () {
        sMenu.classList.remove('s-menu--active');
        sOverlay.classList.remove('s-overlay--active');
    });

    // Обработчик события прокрутки для контейнера
    sMenuContainer.addEventListener('scroll', function () {
        // Проверяем, прокручено ли содержимое контейнера
        var isScrolled = sMenuContainer.scrollTop > 0;

        // Добавляем/удаляем класс scrolled в зависимости от того, прокручено ли содержимое или нет
        sMenuButtonClose.classList.toggle('scrolled', isScrolled);
    });

    // Добавляем обработчик события клика на оверлей
    sOverlay.addEventListener('click', function () {
        sOverlay.classList.remove('s-overlay--active');
        sMenu.classList.remove('s-menu--active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Получаем элемент с классом s-menu__acc-group
    var accGroup = document.getElementById('s-menu__acc-group');

    // Добавляем обработчик события клика на элемент с классом s-menu__acc-group
    accGroup.addEventListener('click', function (event) {
        // Проверяем, был ли клик на кнопке
        if (event.target.classList.contains('s-menu__acc-expand_btn')) {
            // Находим ближайший родительский элемент с классом s-menu__acc
            var parentAcc = event.target.closest('.s-menu__acc');

            // Переключаем класс active для контента аккордиона
            parentAcc.classList.toggle('active');

            // Находим элемент с классом s-menu__acc-content внутри родительского элемента
            var content = parentAcc.querySelector('.s-menu__acc-content');

            // Переключаем класс active для контента аккордиона
            content.classList.toggle('active');

            // Получаем текущую высоту контента
            var contentHeight = content.scrollHeight;

            // Устанавливаем высоту контента с учетом его текущей видимости
            content.style.height = content.classList.contains('active') ? contentHeight + 'px' : 0;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var sMenuTabList = document.getElementById('sMenuTabList');
    var tabContents = document.querySelectorAll('.s-menu__tab-content');

    sMenuTabList.addEventListener('click', function(e) {
        var target = e.target;

        if (target.tagName === 'A') {
            // Удаляем класс active у всех элементов
            document.querySelectorAll('.s-menu__tab-link').forEach(function(link) {
                link.parentElement.classList.remove('active');
            });

            tabContents.forEach(function(content) {
                content.classList.remove('active');
            });

            // Добавляем класс active только к выбранному элементу
            var tabId = target.getAttribute('data-block');
            target.parentElement.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        }
    });
});