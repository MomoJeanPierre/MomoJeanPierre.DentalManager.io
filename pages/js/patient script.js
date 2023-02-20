const trigger = document.querySelector('.res-btn');
const nav = document.querySelector('.nav-items');

trigger.addEventListener('click', () => {
    nav.classList.toggle('active');
})