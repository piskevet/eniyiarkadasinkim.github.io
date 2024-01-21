function createInitialButtons() {
  let existingButton1 = document.querySelector('.options button:nth-of-type(1)');
  if (existingButton1 && existingButton1.textContent === 'Seçenek 1') {
    existingButton1.style.display = 'none'; // Seçenek 1 butonunu gizle
  }

  let button2 = document.createElement('button');
  button2.textContent = 'Seçenek 2';
  button2.onclick = function() {
    showResult('seçenek2'); // Sonucu göster
  };
  button2.style.position = 'absolute';
  button2.style.left = '50%';
  button2.style.top = '50px'; // Örnek olarak 50px aşağıda
  document.querySelector('.options').appendChild(button2);
}

function createRandomButton() {
  let randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  let randomY = Math.floor(Math.random() * (window.innerHeight - 100));

  let button = document.createElement('button');
  button.textContent = 'Seçenek 1';
  button.onclick = function() {
    let oldButton = document.querySelector('.options button');
    if (oldButton && oldButton.textContent === 'Seçenek 1') {
      oldButton.remove(); // Eski butonu kaldır
    }
    createRandomButton(); // Yeni buton oluştur
    showResult('seçenek1'); // Sonucu göster
  };
  button.style.position = 'absolute';
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px";

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
