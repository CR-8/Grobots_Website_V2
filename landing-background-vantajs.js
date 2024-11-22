document.addEventListener('DOMContentLoaded', () => {
    VANTA.FOG({
        el: "#background-landing",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x0a0a0a,
        midtoneColor: 0x8aff00,
        lowlightColor: 0x0a0a0a,
        baseColor: 0x0a0a0a,
        blurFactor: 0.90,
        speed: 4.00,
        zoom: .70
    });
});