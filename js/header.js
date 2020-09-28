let hamburger = document.getElementById('hamburger');
let header = document.getElementById('header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    header.classList.toggle('is-active');
})