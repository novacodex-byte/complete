 // FAQ toggle functionality
 document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

const slider = document.querySelector('.testimonial-slider');
const items = document.querySelectorAll('.testimonial-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateSlider() {
// Calculate the transform percentage
slider.style.transform = `translateX(-${currentIndex * 100}%)`;

// Update active class for opacity
items.forEach((item, index) => {
    item.classList.toggle('active', index === currentIndex);
});
}

function showPrev() {
currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
updateSlider();
}

function showNext() {
currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
updateSlider();
}

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Optional: Auto-play slider every 5 seconds
setInterval(showNext, 5000);

// Add a 'joggle' class to the .logo when the page reloads
window.addEventListener('load', () => {
const logo = document.querySelector('.logo');
logo.classList.add('joggle');
});

document.querySelector('.footer-bottom p').innerHTML = `&copy; ${new Date().getFullYear()} BeastPro. All rights reserved.`;
// Features Section Slide-In on Scroll
const featuresSection = document.getElementById('features');

window.addEventListener('scroll', () => {
const sectionPosition = featuresSection.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.2;

if (sectionPosition < screenPosition) {
featuresSection.style.transform = 'translateY(0)';
} else {
featuresSection.style.transform = 'translateY(100%)';
}
});
// Slide-in Animation on Scroll
const sections = document.querySelectorAll('.section');

const handleScroll = () => {
const windowHeight = window.innerHeight;

sections.forEach((section) => {
const sectionTop = section.getBoundingClientRect().top;

if (sectionTop < windowHeight * 0.8) {
section.classList.add('active');
} else {
section.classList.remove('active');
}
});
};

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);


