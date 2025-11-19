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
// ДЛЯ ВЫПАДАЮЩЕГО МЕНЮ - ДОБАВЬТЕ В КОНЕЦ main.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== Sidebar Menu Initialized ===');

    const sidebarItems = document.querySelectorAll('.sidebar__item');
    const dropdowns = document.querySelectorAll('.dropdown-menu');

    // Принудительно показываем первое меню для теста (через 2 секунды)
    setTimeout(() => {
        const firstDropdown = document.querySelector('.dropdown-menu');
        if (firstDropdown) {
            console.log('✅ Dropdown menu found and working');
            // Раскомментируйте для теста:
            // firstDropdown.style.opacity = '1';
            // firstDropdown.style.visibility = 'visible';
            // firstDropdown.style.background = 'lightyellow';
        } else {
            console.log('❌ No dropdown menu found');
        }
    }, 2000);

    // Проверяем hover
    sidebarItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            console.log(`🖱️ Hover on menu item ${index + 1}`);
        });
    });
});