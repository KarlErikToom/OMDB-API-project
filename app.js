const movieSearchBox = document.querySelector(".search__input");
const moviesListEl = document.querySelector(".movies");
const movieContainerEl = document.querySelector(".movie__box--container");

async function loadMovies(searchTerm) {
  const movies = await fetch(
    `https://www.omdbapi.com/?s=${searchTerm}&apikey=a398627a`
  );
  const moviesData = await movies.json();
  if (moviesData.Search) {
    moviesListEl.innerHTML = moviesData.Search.map((movie) =>
      movieHTML(movie)
    ).join("");
    moviesListEl
      .querySelectorAll(".movie__box--container")
      .forEach((container) => (container.style.display = "flex"));
  } else {
    moviesListEl.innerHTML = "<h1>Mo movies found </h1>";
  }
}

function findMovies(event) {
  if (event.key === "Enter") {
    let searchTerm = movieSearchBox.value.trim();
    loadMovies(searchTerm);
  }
}
function movieHTML(movie) {
  return `<div class="movie">
    <div class="movie__box--container">
      <figure class="movie__img--wrapper">
        <img class="movie__img" src="${movie.Poster}" alt="" />
      </figure>
      <h2 class="movie__title">${movie.Title}</h2>
      <p class="movie__date">Release Date : ${movie.Year}</p>
      <p class="movie__genre">Genre : action</p>
      <p class="movie__director">Director: Matt Reeves</p>
    </div>
  </div>`;
}
movieSearchBox.addEventListener("keydown", function (event) {
  findMovies(event);
});
