document.addEventListener("mousemove", function(e) {
    const xPos = e.clientX / window.innerWidth * 150;
    const yPos = e.clientY / window.innerHeight * 80;

    const gradientSize = 400;
    const gradientX = xPos * 10;
    const gradientY = yPos * 10;
    const gradientColor = `rgba(255, 255, 255, 0.1)`; /* Blanco semitransparente */

    document.querySelector(".background").style.background = `
        radial-gradient(${gradientSize}px at ${gradientX}px ${gradientY}px, ${gradientColor}, transparent 90%)
    `;
});