const hamburger = document.getElementById('nav-hamburger');
const links = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    links.classList.toggle('active');
    hamburger.classList.toggle('active');
});