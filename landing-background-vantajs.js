/**
 * Landing Page Background Effect
 * Description: Initializes and configures the VANTA.js fog effect for the landing page background
 * Author: Robotics Club SRMCEM
 * Version: 1.0
 * Dependencies: three.js, vanta.fog.min.js
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize VANTA fog effect
    VANTA.FOG({
        el: "#background-landing",  // Target element
        mouseControls: true,        // Enable mouse interaction
        touchControls: true,        // Enable touch interaction
        gyroControls: false,        // Disable gyroscope controls
        minHeight: 200.00,          // Minimum height of the effect
        minWidth: 200.00,           // Minimum width of the effect
        highlightColor: 0x0a0a0a,        // Color of highlights (black)
        midtoneColor: 0x8aff00,         // Color of midtones 
        lowlightColor: 0x0a0a0a,        // Color of lowlights (black)
        baseColor: 0x0a0a0a,            // Base color (black)
        blurFactor: 0.90,          // Amount of blur effect
        speed: 4.00,               // Animation speed
        zoom: .70                 // Zoom level of the effect
    });
});