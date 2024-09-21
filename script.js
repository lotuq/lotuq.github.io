// Function to create a dynamic background with moving shapes
function createMovingShapes() {
    const body = document.body;
    const shapeCount = 50; // Number of shapes
    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        shape.style.left = `${Math.random() * 100}vw`;
        shape.style.top = `${Math.random() * 100}vh`;
        shape.style.animationDuration = `${Math.random() * 3 + 2}s`;
        body.appendChild(shape);
    }
}

// Event listener to show game names on hover
document.querySelectorAll('.game-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        const gameName = document.createElement('div');
        gameName.classList.add('game-name');
        gameName.innerText = item.querySelector('img').alt;
        item.appendChild(gameName);
    });

    item.addEventListener('mouseleave', () => {
        const gameName = item.querySelector('.game-name');
        if (gameName) {
            item.removeChild(gameName);
        }
    });
});

// Call the function to create moving shapes on page load
window.onload = createMovingShapes;


