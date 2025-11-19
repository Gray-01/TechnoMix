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
// ДЛЯ ОТЛАДКИ МЕНЮ - добавьте в конец main.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== Dropdown Menu Debug ===');

    // Принудительно показываем все меню для теста
    setTimeout(() => {
        const dropdowns = document.querySelectorAll('.dropdown-menu');
        console.log(`Found ${dropdowns.length} dropdown menus`);

        dropdowns.forEach((dropdown, index) => {
            console.log(`Dropdown ${index + 1}:`, dropdown);
            // Раскомментируйте для теста:
            // dropdown.style.opacity = '1';
            // dropdown.style.visibility = 'visible';
            // dropdown.style.background = 'lightyellow';
            // dropdown.style.border = '3px solid red';
        });
    }, 1000);

    // Проверяем hover
    const sidebarItems = document.querySelectorAll('.sidebar__item');
    sidebarItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            console.log(`Hover on item ${index + 1}`);
            this.style.backgroundColor = 'rgba(0,255,0,0.1)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
});