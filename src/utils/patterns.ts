export const generateGradientPattern = () => {
  const colors = [
    'rgba(124, 58, 237, 0.1)', // primary-600
    'rgba(192, 38, 211, 0.1)', // secondary-600
    'rgba(225, 29, 72, 0.1)',  // accent-600
  ];
  
  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 200;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Fill background
  ctx.fillStyle = colors[0];
  ctx.fillRect(0, 0, 200, 200);

  // Draw dots
  for (let i = 0; i < 200; i += 20) {
    for (let j = 0; j < 200; j += 20) {
      ctx.beginPath();
      ctx.arc(i, j, 1, 0, Math.PI * 2);
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      ctx.fill();
    }
  }

  return canvas.toDataURL();
};