
const movieSearchBox = document.querySelector(".search__input")

async function loadMovies(searchTerm){
    const movies = await fetch (`https://www.omdbapi.com/?s=${searchTerm}&apikey=a398627a`)
    const moviesData = await movies.json()
    console.log(moviesData)
}

function findMovies(){
    let searchTerm = (movieSearchBox.value).trim()
    console.log(searchTerm)
}