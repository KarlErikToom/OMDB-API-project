const movieSearchBox = document.querySelector(".search__input");
const moviesListEl = document.querySelector(".movies");

async function loadMovies(searchTerm) {
  const movies = await fetch(
    `https://www.omdbapi.com/?s=${searchTerm}&apikey=a398627a`
  );
  const moviesData = await movies.json();
  moviesListEl.innerHTML = moviesData.map((movie) => movieHTML(movie)).join("");
}
loadMovies();

/*function findMovies() {
  let searchTerm = movieSearchBox.value.trim();
  console.log(searchTerm);
}*/
function movieHTML(movie) {
  return `<div class="movie">
    <div class="movie__box--container">
      <figure class="movie__img--wrapper">
        <img class="movie__img" src="assets/batman.jfif" alt="" />
      </figure>
      <h2 class="movie__title">Movie Title: ${movie.title}</h2>
      <p class="movie__date">Release Date : ${movie.year}</p>
      <p class="movie__genre">Genre : action</p>
      <p class="movie__director">Director: Matt Reeves</p>
    </div>
  </div>`;
}
