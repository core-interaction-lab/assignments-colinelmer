const fetchMovies = async () => {
    const response = await fetch('https://api.airtable.com/v0/appA1gDF2cvzmG8MY/Table%201?api_key=keygxcQk7hFYAX2A8').then(data => data.json())

    console.log(response);

    const moviesContainer = document.getElementById('movies-container');

    response.records.forEach(movie => {
        console.log(movie.fields);
        const articleEl = document.createElement('article');
        const titleEl = document.createElement('div');
        const genreEl = document.createElement('div');
        const imbdUrlEl = document.createElement('a');
        const releaseDateEl = document.createElement('div');

        titleEl.innerHTML = movie.fields.Title;
        genreEl.innerHTML = movie.fields.Genre;

        imbdUrlEl.href = movie.fields.imdb_url;
        imbdUrlEl.target = "_blank";
        imbdUrlEl.classList.add('imdb-link');

        imbdUrlEl.innerHTML = "IMDB Page";
        releaseDateEl.innerHTML = movie.fields.Date;

        articleEl.append(titleEl, genreEl, imbdUrlEl, releaseDateEl);

        moviesContainer.appendChild(articleEl)
    });

    const linkTags = document.querySelectorAll('.imdb-link');
    console.log(linkTags);
    linkTags.forEach((link, index) => {
        const linkColor = link.style.color;
        link.id = `my-link-${index + 1}`;
        link.addEventListener('mouseover', (evt) => {
            link.style.color = "green";
        });

        link.addEventListener('mouseout', (evt) => {
            link.style.color = linkColor;
        });
    });
};

fetchMovies();