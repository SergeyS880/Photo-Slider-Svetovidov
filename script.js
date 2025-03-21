document.addEventListener('DOMContentLoaded', function() {

    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.dots');

    let currentSlide = 0;
    const slideCount = slides.length;

    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => showImage(index));
        dotsContainer.appendChild(dot);
    })

    const dots = document.querySelectorAll('.dot');

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        })
    }

    function showImage(n) {
        currentSlide = (n + slideCount) % slideCount;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
    }

    prevButton.addEventListener('click', () => showImage(currentSlide -1));
    nextButton.addEventListener('click', () => showImage(currentSlide +1));


        updateDots();
    
});