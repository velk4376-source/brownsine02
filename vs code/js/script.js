let currentPage = 1;
    document.getElementById('dateForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.getElementById('anniversaryDate');
      const error = document.getElementById('dateError');
      if (input.value.trim() === '05/10/24') {
        document.getElementById('loginPage').classList.remove('active');
        document.getElementById('page1').classList.add('active');
      } else {
        error.textContent = 'That is not our date. Try again, my love.';
        input.value = '';
        input.focus();
      }
    });
    document.querySelectorAll('[data-next]').forEach((button) => {
      button.addEventListener('click', () => {
        document.getElementById(`page${currentPage}`).classList.remove('active');
        currentPage += 1;
        document.getElementById(`page${currentPage}`).classList.add('active');
      });
    });
    function addHeart(extra = false) {
      const heart = document.createElement('span');
      heart.className = 'heart';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.setProperty('--duration', `${extra ? 3 + Math.random() * 2 : 6 + Math.random() * 5}s`);
      heart.style.setProperty('--drift', `${-45 + Math.random() * 90}px`);
      document.getElementById('heartField').appendChild(heart);
      heart.addEventListener('animationend', () => heart.remove());
    }
    setInterval(() => addHeart(), 650);
    document.getElementById('celebrateButton').addEventListener('click', () => {
      document.getElementById('finalNote').classList.add('show');
      for (let index = 0; index < 18; index += 1) setTimeout(() => addHeart(true), index * 70);
    });

document.querySelectorAll('img').forEach((image) => {
  const markLoaded = () => image.classList.add('is-loaded');

  if (image.complete && image.naturalWidth > 0) {
    markLoaded();
  } else {
    image.addEventListener('load', markLoaded, { once: true });
  }
});
