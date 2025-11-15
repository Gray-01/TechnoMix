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
