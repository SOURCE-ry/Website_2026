const hamburger = document.getElementById('nav-hamburger');
const links = document.querySelector('.nav-links');

// Toggle active when hamburger is clicked
function toggleActive() {
    links.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Add event listener to the hamburger button
hamburger.addEventListener('click', toggleActive);