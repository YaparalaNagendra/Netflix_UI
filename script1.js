const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";

const api_key = "9b43e9a5a3cd70a0c64c236ad573ba9c"; // Replace with your actual TMDb API key

const requests = {
    fetchNetflixOriginals: `${base_url}/discover/tv?api_key=${api_key}&with_network=213`,
};

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function handleResponse() {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
        const data = JSON.parse(xhttp.responseText);
        if (data.results && data.results.length > 0) {
            const setMovie = data.results[Math.floor(Math.random() * data.results.length)];
            const banner = document.getElementById("banner");
            const banner_title = document.getElementById("banner_title");
            const banner_des = document.getElementById("banner_description");

            banner.style.backgroundImage = `url(${banner_url}${setMovie.backdrop_path})`;
            banner_des.innerText = truncate(setMovie.overview, 150);
            banner_title.innerText = setMovie.name;
        } else {
            console.error("No results found in the API response.");
        }
    }
}

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = handleResponse;
xhttp.open("GET", requests.fetchNetflixOriginals, true);
xhttp.send();
