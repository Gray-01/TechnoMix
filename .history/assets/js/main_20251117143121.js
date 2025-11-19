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
// ДЛЯ ТОЧНОГО ПОЗИЦИОНИРОВАНИЯ МЕНЮ
document.addEventListener('DOMContentLoaded', function() {
    function positionDropdowns() {
        const sidebar = document.querySelector('.sidebar');
        const dropdowns = document.querySelectorAll('.dropdown-menu');

        if (sidebar && dropdowns.length > 0) {
            const sidebarRect = sidebar.getBoundingClientRect();

            dropdowns.forEach(dropdown => {
                dropdown.style.left = sidebarRect.width + 'px';
                dropdown.style.top = '0';
            });
        }
    }

    // Позиционируем при загрузке и ресайзе
    positionDropdowns();
    window.addEventListener('resize', positionDropdowns);

    // Для отладки - принудительно показываем первое меню
    setTimeout(() => {
        const firstDropdown = document.querySelector('.dropdown-menu');
        if (firstDropdown) {
            firstDropdown.style.opacity = '1';
            firstDropdown.style.visibility = 'visible';
            firstDropdown.style.background = 'lightyellow';
            firstDropdown.style.border = '3px solid red';
            console.log('Dropdown forced to show for testing');
        }
    }, 1000);
});