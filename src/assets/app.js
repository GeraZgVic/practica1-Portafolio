document.addEventListener("mousemove", function(e) {
    const xPos = e.clientX;
    const yPos = e.clientY;

    const gradientSize = 400;

    // Ajustamos las coordenadas del gradiente para que comiencen justo en la punta del puntero del ratón
    const gradientX = xPos - (gradientSize / 2);
    const gradientY = yPos - (gradientSize / 2);

    const gradientColor = `rgba(255, 255, 255, 0.1)`; // Blanco semitransparente

    document.querySelector(".background").style.background = `
        radial-gradient(${gradientSize}px at ${gradientX + (gradientSize / 2)}px ${gradientY + (gradientSize / 2)}px, ${gradientColor}, transparent 90%)
    `;
});
