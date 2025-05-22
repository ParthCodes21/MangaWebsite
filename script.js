const searchBar = document.getElementById('searchBar');
const mangaCards = document.querySelectorAll('.manga-card');

searchBar.addEventListener('input', function () {
  const query = this.value.toLowerCase();

  mangaCards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    if (title.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});