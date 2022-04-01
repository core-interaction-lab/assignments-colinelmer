const db = {
    id: 'appPiFK0x3NJa8GDs',
    table: 'Tattoos',
    apiKey: 'keygxcQk7hFYAX2A8'
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

const fetchMovies = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);

    const myObject = {
        TattooNumber: '',


    }

    const myArray = ['movie', 344545, 'asdfds'];

    const PhotoExists = false;

    console.log( myObject.realease_date )
    console.log(myArray[2]);

    const container = document.getElementById('tattoos-container');

    response.records.forEach((tattoo) => {
        console.log(tattoo);

        if (tattoo.fields.Photo) {
            console.log(tattoo.fields.Photo[0].url);
            const tattooImg = document.createElement('img');
            //tattooImg.src = tattoo.fields.Photo[0].url;
            tattooImg.setAttribute('src', tattoo.fields.Photo[0].url);
            container.append(tattooImg);
        }

        if (tattoo.fields.Ink) {
            const inkEl = document.createElement ('p');
            inkEl.innerHTML = tattoo.fields.Ink;
            container.append(inkEl)
        }

    });
};

fetchMovies();