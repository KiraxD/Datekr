const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

noButton.addEventListener('mouseover', () => {
  const maxX = window.innerWidth - noButton.clientWidth;
  const maxY = window.innerHeight - noButton.clientHeight;

  const posX = Math.floor(Math.random() * maxX);
  const posY = Math.floor(Math.random() * maxY);

  noButton.style.left = `${posX}px`;
  noButton.style.top = `${posY}px`;
});

yesButton.style.left = `${window.innerWidth / 2 - yesButton.clientWidth / 2}px`;
yesButton.style.top = `${window.innerHeight / 2 - yesButton.clientHeight / 2}px`;
