function createInitialButtons() {
  let button1 = document.createElement('button');
  button1.textContent = 'Seçenek 1';
  button1.onclick = function() {
    button1.remove(); // Butonu kaldır
    createRandomButton(); // Rastgele buton oluştur
    showResult('seçenek1'); // Sonucu göster
  };
  button1.style.position = 'absolute';
  button1.style.left = '50%';
  button1.style.top = '50%';
  document.querySelector('.options').appendChild(button1);
}

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
  if (oldButton && oldButton.textContent === 'Seçenek 1') {
    oldButton.remove();
  }

  document.querySelector('.options').appendChild(button);
}

document.addEventListener('DOMContentLoaded', function() {
  createInitialButtons();
});

function showResult(option) {
  let result = document.getElementById('result');
  if (option === 'seçenek1') {
    result.textContent = 'En iyi arkadaşın: Arkadaş 1';
  } else if (option === 'seçenek2') {
    result.textContent = 'En iyi arkadaşın: Arkadaş 2';
  }
}
