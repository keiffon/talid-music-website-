const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// Video slider with swipe functionality
const slides = document.querySelectorAll(".video-slide");
let currentIndex = 0;
let startX, endX;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

// Touch event handlers for swipe functionality
function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    // Prevent default scrolling behavior on touch devices
    event.preventDefault();
}

function handleTouchMove(event) {
    endX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    if (startX > endX + 50) {
        // Swipe left - next slide
        currentIndex = (currentIndex + 1) % slides.length;
    } else if (startX < endX - 50) {
        // Swipe right - previous slide
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
    showSlide(currentIndex);
}

// Attach touch events to the home section container or slides
const slider = document.querySelector(".home");
slider.addEventListener("touchstart", handleTouchStart, { passive: false });
slider.addEventListener("touchmove", handleTouchMove, { passive: false });
slider.addEventListener("touchend", handleTouchEnd);

// Initially show the first slide
showSlide(currentIndex);
