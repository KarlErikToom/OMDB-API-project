const movieSearchBox = document.querySelector(".search__input");
const moviesListEl = document.querySelector(".movies");
const movieContainerEl = document.querySelector(".movie__box--container");
const searchForm = document.querySelector(".search__form");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let searchTerm = movieSearchBox.value.trim();
  loadMovies(searchTerm);
});

async function loadMovies(searchTerm) {
  const movies = await fetch(
    `https://www.omdbapi.com/?s=${searchTerm}&apikey=a398627a`
  );
  const moviesData = await movies.json();
  if (moviesData.Search) {
    const headerEl = document.querySelector(".movie__header")
    headerEl.innerHTML = `Showing result for: ${searchTerm}`
    moviesListEl.innerHTML = moviesData.Search.slice(0, 8).map((movie, index) =>
      movieHTML(movie, index)
    ).join("");
    const movieContainers = moviesListEl.querySelectorAll(
      ".movie__box--container"
    );
    movieContainers.forEach((container, index) => {
      container.style.animationDelay = `${(index + 1) * 200}ms`;
      container.style.display = "flex"; 
    });
  } else {
    const headerEl = document.querySelector(".movie__header")
    headerEl.innerHTML = `Showing results for: ${searchTerm}`
    moviesListEl.innerHTML = "<h1>No movies found </h1>";
  }
  
}

function movieHTML(movie) {
  return `
    <div class="movie">
      <div class="movie__box--container">
        <figure class="movie__img--wrapper">
          <img class="movie__img" src="${movie.Poster}" alt="" />
        </figure>
        <h2 class="movie__title">${movie.Title}</h2>
        <p class="movie__date">Release Date : ${movie.Year}</p>
        <p class="movie__genre">Type:${movie.Type} </p>
        <p class="movie__director">Director: Matt Reeves</p>
      </div>
    </div>
  `;
}
