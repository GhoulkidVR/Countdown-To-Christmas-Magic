// Dynamically set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mousemove event to track mouse position and trigger particle effect
document.body.addEventListener('mousemove', function(e) {
    document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
    createParticles(e.clientX, e.clientY);
});

// Particle Effect Function
function createParticles(x, y) {
    let particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    document.body.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 2000);
}

// JavaScript to create falling snowflakes with random positions and animation delays
document.addEventListener("DOMContentLoaded", () => {
    const snowflakesContainer = document.querySelector(".snowflakes-container");

    // Function to create snowflakes
    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.textContent = "❄️";

        // Randomize the position and animation delay
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;

        snowflakesContainer.appendChild(snowflake);

        // Remove the snowflake after it falls
        setTimeout(() => {
            snowflake.remove();
        }, 10000); // 10 seconds for snowflake fall
    }

    // Create snowflakes every 200ms for continuous effect
    setInterval(createSnowflake, 200);
});