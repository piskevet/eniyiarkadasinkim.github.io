function showResult(option) {
  let result = document.getElementById('result');
  if (option === 'seçenek1') {
    result.textContent = 'En iyi arkadaşın: Arkadaş 1';
  } else if (option === 'seçenek2') {
    result.textContent = 'En iyi arkadaşın: Arkadaş 2';
  }

  // Rastgele konum hesaplama
  let randomX = Math.floor(Math.random() * window.innerWidth);
  let randomY = Math.floor(Math.random() * window.innerHeight);

  // Butonun konumunu güncelleme
  let button = document.createElement('button');
  button.textContent = 'Seçenek 1';
  button.onclick = function() { showResult('seçenek1'); };
  button.style.position = 'absolute';
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';

  // Eski butonu kaldırma
  let oldButton = document.querySelector('.options button');
  if (oldButton) {
    oldButton.remove();
  }

  // Yeni butonu ekleme
  document.querySelector('.options').appendChild(button);
}
