const container = document.getElementById('container');

// Set the container size
container.style.width = '100vw';
container.style.height = '100vh';

// Create the grid of dots
for (let x = 0; x < 51; x++) {
  for (let y = 0; y < 24; y++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${x * 30}px`;
    dot.style.top = `${y * 30}px`;
    container.appendChild(dot);
  }
}

// Add the flicker animation
const dots = document.querySelectorAll('.dot');
dots.forEach(dot => {
  dot.style.animation = 'flicker 1s infinite';
});

document.head.appendChild(style);