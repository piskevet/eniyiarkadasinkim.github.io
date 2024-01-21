// Rastgele konum hesaplama ve buton oluşturma fonksiyonu
function createRandomButton() {
  let randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Pencere genişliği içinde rastgele X konumu
  let randomY = Math.floor(Math.random() * (window.innerHeight - 100)); // Pencere yüksekliği içinde rastgele Y konumu

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

// İmleç üstüne gelindiğinde buton oluştur
document.addEventListener('mousemove', function(e) {
  createRandomButton();
});
