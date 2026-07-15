const carousel = document.getElementById('item-carousel');
const backButton = document.getElementById('carousel-back-button');
const nextButton = document.getElementById('carousel-next-button');

// Calculate the amount to scroll based on the width of a slide and the gap between slides
function getScrollAmount() {
    const slide = carousel.querySelector('.item-carousel-slide');
    const style = window.getComputedStyle(slide);
    const gap = parseFloat(style.gap) || 0;
    return slide.getBoundingClientRect().width + gap;
}

// Scroll the carousel right
nextButton.addEventListener('click', () => {
    carousel.scrollBy({
        left: getScrollAmount(),
        behavior: 'smooth'
    });
});

// Scroll the carousel left
backButton.addEventListener('click', () => {
    carousel.scrollBy({
        left: -getScrollAmount(),
        behavior: 'smooth'
    });
});