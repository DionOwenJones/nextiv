document.addEventListener('DOMContentLoaded', () => {
    const stages = ['beginner', 'intermediate', 'advanced'];
    let currentStageIndex = 0;
    let timer;

    function showStage(index) {
        // Hide all stages
        document.querySelectorAll('.mastery-stage, .visual-stage').forEach(stage => {
            stage.classList.remove('active');
        });

        // Show current stage
        document.querySelector(`.mastery-stage[data-stage="${stages[index]}"]`).classList.add('active');
        document.querySelector(`.visual-stage[data-stage="${stages[index]}"]`).classList.add('active');
    }

    function nextStage() {
        currentStageIndex = (currentStageIndex + 1) % stages.length;
        showStage(currentStageIndex);
    }

    function startRotation() {
        timer = setInterval(nextStage, 4000); // Change stage every 4 seconds
    }

    function stopRotation() {
        clearInterval(timer);
    }

    // Start the rotation
    startRotation();

    // Pause rotation on hover
    document.querySelector('.mastery-split').addEventListener('mouseenter', stopRotation);
    document.querySelector('.mastery-split').addEventListener('mouseleave', startRotation);
});
