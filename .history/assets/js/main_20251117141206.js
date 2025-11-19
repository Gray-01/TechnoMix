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

// все что ниже на удаление
// ДЛЯ ОТЛАДКИ САЙДБАРА - удалите после проверки
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== SIDEBAR DEBUG ===');

    const sidebarItems = document.querySelectorAll('.sidebar__item');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    console.log('Sidebar items:', sidebarItems.length);
    console.log('Dropdown menus:', dropdownMenus.length);

    // Проверка hover
    sidebarItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            console.log(`Hover on item ${index + 1}`);
            this.style.backgroundColor = 'rgba(0,255,0,0.2)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });

    // Принудительно покажем первое меню для теста
    setTimeout(() => {
        const firstDropdown = document.querySelector('.dropdown-menu');
        if (firstDropdown) {
            firstDropdown.style.display = 'block';
            firstDropdown.style.opacity = '1';
            firstDropdown.style.visibility = 'visible';
            firstDropdown.style.transform = 'translateX(0)';
            firstDropdown.style.border = '3px solid red';
            firstDropdown.style.background = 'yellow';
            console.log('Forced first dropdown to show');
        }
    }, 1000);
});