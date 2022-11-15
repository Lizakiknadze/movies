const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=%22";

const main = document.getElementById('main')
const form = document.getElementById('inputs')
const search = document.getElementById('search')
const vote_average = document.getElementById('IMDB')

getMovies(API_URL);
async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    console.log(data.results)
    showMovies(data.results)
}
function showMovies (movie){
    movie.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt=${title}>
        <div class = 'movie-info'>
        <h3>${title}</h3>
        <p>${overview}</p>
        <span class="${changeColor(vote_average)}>${vote_average}</span>
        </div>
        `
        main.appendChild(movieEl)
    }); 
}
function changeColor(vote_average){
    if(vote_average =>8){
        return 'green';
    }
    else if(vote_average => 5){
        return 'yellow'
    }
    else if(vote_average < 5){
        return 'red'
    }
    
}

// function f_color(){
//     if (document.getElementById('vote_average').value > 7,99) {
//     document.getElementById('vote_average').style.color = "Green";
//     }
//     else if (document.getElementById('vote_average').value >5.99 && < 7.99) {
//     document.getElementById('vote_average').style.color = "Orange";
//     }
//     else if (document.getElementById('vote_average').value = '1-5') {
//     document.getElementById('vote_average').style.color = "Red";
//     }
//     }
//     f_color();
    