// Countdown Timer
const launchDate = new Date('2025-12-31T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Feature showcase animations
const features = document.querySelectorAll('.feature-item');

features.forEach((feature, index) => {
    feature.style.animationDelay = `${index * 0.2}s`;
    feature.style.opacity = '0';
    feature.style.transform = 'translateY(20px)';
});

// Animate features on load
window.addEventListener('load', () => {
    features.forEach((feature) => {
        feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        feature.style.opacity = '1';
        feature.style.transform = 'translateY(0)';
    });
});

// Letter animation delay
document.querySelectorAll('.letter-animation').forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.1}s`;
});

// Phone mockup preview rotation
const previews = document.querySelectorAll('.screen-image');
let currentPreview = 0;

function rotatePreview() {
    if (previews.length > 0) {
        previews[currentPreview].classList.remove('active');
        currentPreview = (currentPreview + 1) % previews.length;
        previews[currentPreview].classList.add('active');
    }
}

setInterval(rotatePreview, 3000);
