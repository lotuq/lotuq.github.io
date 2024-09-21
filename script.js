// Function to create a dynamic background with moving shapes
function createMovingShapes() {
    const body = document.body;
    const shapeCount = 50; // Number of shapes
    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        shape.style.left = `${Math.random() * 100}vw`;
        shape.style.top = `${Math.random() * 100}vh`;
        shape.style.animationDuration = `${Math.random() * 10 + 5}s`;
        shape.style.animationDelay = `${Math.random() * 5}s`;
        body.appendChild(shape);
    }
}

// Run the moving shapes effect when the page loads
window.onload = function () {
    createMovingShapes();
};

// Function for hover effect on game images
const gameItems = document.querySelectorAll('.game-item');

gameItems.forEach(item => {
    item.addEventListener('mouseover', function () {
        const gameName = item.querySelector('.game-name');
        if (gameName) {
            gameName.style.display = 'block';
        }
    });

    item.addEventListener('mouseout', function () {
        const gameName = item.querySelector('.game-name');
        if (gameName) {
            gameName.style.display = 'none';
        }
    });
});

// Click to load hidden proxy content
const proxyButton = document.getElementById('proxy-btn');
const proxyContent = document.getElementById('proxy-content');

if (proxyButton) {
    proxyButton.addEventListener('click', function () {
        proxyContent.style.display = proxyContent.style.display === 'none' ? 'block' : 'none';
    });
}

