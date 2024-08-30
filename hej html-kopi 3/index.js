const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        showSlide(slideIndex);  
        intervalId = setInterval(nextSlide, 5000);  
    }
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "block";  
        } else {
            slide.style.display = "none";  
        }
    });
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;  
    }
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;  
    }
    showSlide(slideIndex);
}