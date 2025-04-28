document.addEventListener('DOMContentLoaded', () => {
    const screens = document.querySelectorAll('.screen-image');
    let currentScreenIndex = 0;
    let timer;

    function showScreen(index) {
        screens.forEach(screen => screen.classList.remove('active'));
        screens[index].classList.add('active');
    }

    function nextScreen() {
        currentScreenIndex = (currentScreenIndex + 1) % screens.length;
        showScreen(currentScreenIndex);
    }

    function startRotation() {
        timer = setInterval(nextScreen, 4000); // Change screen every 4 seconds
    }

    // Start the rotation
    startRotation();
});
