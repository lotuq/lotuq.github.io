// js/script.js

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    function createParticle(x, y) {
        particles.push({
            x: x,
            y: y,
            radius: Math.random() * 5 + 2, // Particle radius
            dx: Math.random() * 2 - 1,
            dy: Math.random() * 2 - 1
        });
    }

    function draw() {
        ctx.fillStyle = 'rgba(50, 50, 50, 0.8)'; // Dark grey background
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, index) => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'darkpurple'; // Dark purple particles
            ctx.fill();

            p.x += p.dx;
            p.y += p.dy;

            // Boundary detection
            if (p.x > canvas.width || p.x < 0) p.dx = -p.dx;
            if (p.y > canvas.height || p.y < 0) p.dy = -p.dy;

            // Draw lines connecting particles
            for (let j = index + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const distance = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (distance < 100) { // Connect if particles are close enough
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = 'rgba(128, 0, 128, 0.5)'; // Line color
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(draw);
    }

    // Event listener to create a new particle on click
    canvas.addEventListener('click', (event) => {
        createParticle(event.clientX, event.clientY);
    });

    // Initial particle creation
    for (let i = 0; i < 50; i++) {
        createParticle(Math.random() * canvas.width, Math.random() * canvas.height);
    }

    draw();

    // Resize the canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
