function createRandomButton() {
  let randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  let randomY = Math.floor(Math.random() * (window.innerHeight - 100));

  let button = document.createElement('button');
  button.textContent = 'Seçenek 1';
  button.onclick = function() {
    button.remove(); // Butonu kaldır
    createRandomButton(); // Yeni buton oluştur
    showResult('seçenek1'); // Sonucu göster
  };
  button.style.position = 'absolute';
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';

  let oldButton = document.querySelector('.options button');
  if (oldButton) {
    oldButton.remove();
  }

  document.querySelector('.options').appendChild(button);
}

// Butona tıklanınca buton oluştur
document.querySelector('.options').addEventListener('click', function(e) {
  createRandomButton();
});

function showResult(option) {
  let result = document.getElementById('result');
  if (option === 'seçenek1') {
    result.textContent = 'En iyi arkadaşın: Arkadaş 1';
  } else if (option === 'seçenek2') {
    result.textContent = 'En iyi arkadaşın: Arkadaş 2';
  }
}
