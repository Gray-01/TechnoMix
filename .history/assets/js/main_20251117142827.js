const burgerBtn = document.getElementById('burgerBtn');
const burgerMenu = document.getElementById('burgerMenu');
const overlay = document.getElementById('overlay');

// Открытие/закрытие по кнопке
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Закрытие по клику на фон
overlay.addEventListener('click', () => {
    burgerBtn.classList.remove('active');
    burgerMenu.classList.remove('active');
    overlay.classList.remove('active');
});


// тест

// УЛУЧШЕНИЕ ДЛЯ ВЫПАДАЮЩЕГО МЕНЮ
document.addEventListener('DOMContentLoaded', function() {
    const sidebarItems = document.querySelectorAll('.sidebar__item');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    // Закрываем все меню при загрузке
    dropdownMenus.forEach(menu => {
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
    });

    // Обработчики для плавного перехода между меню
    sidebarItems.forEach(item => {
        const dropdown = item.querySelector('.dropdown-menu');

        if (dropdown) {
            item.addEventListener('mouseenter', function() {
                // Сначала скрываем все меню
                dropdownMenus.forEach(menu => {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                    menu.style.pointerEvents = 'none';
                });

                // Показываем текущее меню
                setTimeout(() => {
                    dropdown.style.opacity = '1';
                    dropdown.style.visibility = 'visible';
                    dropdown.style.pointerEvents = 'auto';
                }, 50);
            });
        }
    });

    // Закрытие меню при клике вне сайдбара
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.sidebar') && !e.target.closest('.dropdown-menu')) {
            dropdownMenus.forEach(menu => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.pointerEvents = 'none';
            });
        }
    });
});