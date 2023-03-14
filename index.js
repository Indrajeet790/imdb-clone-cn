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

  // Event listener on search
  searchKeyword.addEventListener("keyup", function () {
    let search = searchKeyword.value;
    if (search === "") {
      emptyText.style.display = "block";
      suggestionsContainer.innerHTML = "";
      suggestionList = [];
    } else {
      emptyText.style.display = "none";
      (async () => {
        let data = await fetchMovies(search);
        addToSuggestionContainerDOM(data);
      })();

      suggestionsContainer.style.display = "grid";
    }
  });

  // Fetches data from api and calls function to add it in
  async function fetchMovies(search) {
    const url = `https://www.omdbapi.com//?t=${search}&apikey=28a2ff0`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  // Shows in suggestion container DOM
  function addToSuggestionContainerDOM(data) {
    document.getElementById("empty-fav-text").style.display = "none";
    let isPresent = false;
})();
