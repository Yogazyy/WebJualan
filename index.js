// Toggle menu sidebar
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// Optional: Close menu jika diklik di luar area menu (responsive UX)
document.addEventListener('click', function(event) {
  const menu = document.getElementById('menu');
  const menuBtn = document.querySelector('.menu-btn');
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    menu.classList.remove('active');
  }
});

// Optional: Logika klik tombol "beli ini" (tracking / alert)
const buyButtons = document.querySelectorAll('.buy-text');
buyButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    console.log(`User klik tombol beli untuk plan: ${btn.parentElement.querySelector('h3').innerText}`);
    // Contoh: kamu bisa tambahkan tracking atau integrasi ke Telegram API di sini
  });
});
