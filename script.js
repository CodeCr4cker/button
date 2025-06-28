const syncPointer = ({ clientX: pointerX, clientY: pointerY }) => {
  const x = pointerX.toFixed(2);
  const y = pointerY.toFixed(2);
  const xp = (pointerX / window.innerWidth).toFixed(2);
  const yp = (pointerY / window.innerHeight).toFixed(2);
  document.documentElement.style.setProperty('--x', x);
  document.documentElement.style.setProperty('--xp', xp);
  document.documentElement.style.setProperty('--y', y);
  document.documentElement.style.setProperty('--yp', yp);
};

const activateGlow = (e) => {
  syncPointer(e);
  document.documentElement.classList.add('clicked');
  setTimeout(() => {
    document.documentElement.classList.remove('clicked');
  }, 500);
};

document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    activateGlow(e);
  });

  btn.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      activateGlow(e.touches[0]);
    }
  });
});
