(function () {
  const searchKeyword = document.getElementById("search");
  const suggestionsContainer = document.getElementById("card-container");
  const favMoviesContainer = document.getElementById("fav-movies-container");
  const emptyText = document.getElementById("empty-search-text");
  const showFavorites = document.getElementById("favorites-section");
  const emptyFavText = document.getElementById("empty-fav-text");

  addToFavDOM();
  showEmptyText();
  let suggestionList = [];
  let favMovieArray = [];

  searchKeyword.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
    }
  });

  function showEmptyText() {
    if (favMoviesContainer.innerHTML == "") {
      emptyFavText.style.display = "block";
    } else {
      emptyFavText.style.display = "none";
    }
  }
})();
