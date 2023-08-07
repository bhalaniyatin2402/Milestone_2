// https://www.omdbapi.com/?apikey=87f0bd48&s=the%20avengers

const searchInput = document.getElementById('search-input')
const container = document.getElementById('container')
container.innerHTML = 'Enter movie name for search'

const omdbMovies = async () => {
    const query = searchInput.value

    const response = await fetch(`https://www.omdbapi.com/?apikey=87f0bd48&s=${query}`)
    const result = await response.json()
    return result
}

async function setMovieToContainer() {
    container.innerHTML = ''
    const result = await omdbMovies()
    if(result.Error) {
        container.innerHTML = 'Please Enter correct movie name'
    } else {
        container.innerHTML = ''
    }
    const movieList = result.Search

    movieList.forEach(movie => {
        container.innerHTML += 
        `<div class="movie-cards">
            <img id="poster" src="${movie.Poster}" alt="">
            <p id="title">${movie.Title}</p>
            <button id="watch-btn">Watch Now</button>
        </div>`
    })
}

searchInput.addEventListener('input', setMovieToContainer)
