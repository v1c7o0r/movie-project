 
 // script.js
document.addEventListener('DOMContentLoaded', function () {
    const movieList = document.getElementById('movie-list');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    let allMovies = []; // Array to store all movie data

    // Function to render movies based on the provided data
    function renderMovies(movies) {
        // Clear previous movie list
        movieList.innerHTML = '';

        // Render movies
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');

            const title = document.createElement('h2');
            title.textContent = movie.title;
            movieElement.appendChild(title);

            const genre = document.createElement('p');
            genre.textContent = `Genre: ${movie.genre}`;
            movieElement.appendChild(genre);

            const year = document.createElement('p');
            year.textContent = `Year: ${movie.year}`;
            movieElement.appendChild(year);

            movieList.appendChild(movieElement);
        });
    }

    // Fetch data from main.json
    fetch('main.json')
        .then(response => response.json())
        .then(data => {
            allMovies = data; // Store all movie data
            renderMovies(allMovies); // Initial rendering of all movies
        })
        .catch(error => console.error('Error fetching data:', error));

    // Event listener for search button click
    searchButton.addEventListener('click', function () {
        const searchQuery = searchInput.value.trim().toLowerCase(); // Get search query
        if (searchQuery !== '') {
            // Filter movies based on search query
            const filteredMovies = allMovies.filter(movie => {
                return movie.title.toLowerCase().includes(searchQuery); // Check if movie title contains search query
            });
            // Render filtered movies
            renderMovies(filteredMovies);
        } else {
            // If search query is empty, render all movies
            renderMovies(allMovies);
        }
    });

    // Event listener for input field (for pressing Enter key)
    searchInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            searchButton.click(); // Trigger search button click event
        }
    });
});
