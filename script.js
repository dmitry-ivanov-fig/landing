// OpenRN Landing - JavaScript
// Placeholder for future interactivity (search, nav, etc.)

document.addEventListener('DOMContentLoaded', function () {

  const searchInput = document.querySelector('.search-bar input');
  const searchBtn = document.querySelector('.search-btn');

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', function () {
      const query = searchInput.value.trim();
      if (query) {
        console.log('Search query:', query);
        // Future: API call or navigation
      }
    });

    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        searchBtn.click();
      }
    });
  }

});