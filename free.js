function beranda() {
  window.location.href = "https://github.com/kaelvxy/addon_mcpe/Beranda.html";
}
function addon() {
  window.location.reload();
}
function filterCards() {
  const input = document.getElementById('search').value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(input) ? '' : 'none';
  });
}