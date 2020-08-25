const { Router } = require('express');
const router = Router();
const movieData = {
    ID: 7,
    Title: "The Pianist",
    Year: 2002,
    Age: "18+",
    IMDb: 8.5,
    "Rotten Tomatoes": "95%",
    Netflix: 1,
    Hulu: 0,
    "Prime Video": 1,
    "Disney+": 0,
    Type: 0,
    Directors: "Roman Polanski",
    Genres: "Biography,Drama,Music,War",
    Country: "United Kingdom,France,Poland,Germany",
    Language: "English,German,Russian",
    Runtime: 150
}

const movieArray = [
    {
        "ID": 7,
        "Title": "The Pianist",
        "Year": 2002,
        "Age": "18+",
        "IMDb": 8.5,
        "Rotten Tomatoes": "95%",
        "Netflix": 0,
        "Hulu": 0,
        "Prime Video": 1,
        "Disney+": 0,
        "Type": 0,
        "Directors": "Roman Polanski,George Wilson",
        "Genres": "Biography,Drama,Music,War",
        "Country": "United Kingdom,France,Poland,Germany",
        "Language": "English,German,Russian",
        "Runtime": 150
    },
    {
        "ID": 7,
        "Title": "The Pianist",
        "Year": 2002,
        "Age": "18+",
        "IMDb": 8.5,
        "Rotten Tomatoes": "95%",
        "Netflix": 0,
        "Hulu": 1,
        "Prime Video": 0,
        "Disney+": 0,
        "Type": 1,
        "Directors": "Roman Polanski",
        "Genres": "Biography,Drama,Music,War",
        "Country": "United Kingdom,France,Poland,Germany",
        "Language": "English,German,Russian",
        "Runtime": 150
    },
    {
        "ID": 7,
        "Title": "The Land Before Time",
        "Year": 2002,
        "Age": "18+",
        "IMDb": 8.5,
        "Rotten Tomatoes": "95%",
        "Netflix": 0,
        "Hulu": 0,
        "Prime Video": 1,
        "Disney+": 0,
        "Type": 0,
        "Directors": "Roman Polanski",
        "Genres": "Biography,Drama,Music,War",
        "Country": "United Kingdom,France,Poland,Germany",
        "Language": "English,German,Russian",
        "Runtime": 150
    }
]

router.get("/", (req, res, next) => {
    res.render("index", { "movieArray": movieArray });
});

router.get("/saved", (req, res, next) => {
    res.render("collection")
});

router.get("/login", (req, res, next) => {
    res.render("login")
});

router.get("/login/signup", (req, res, next) => {
    res.render("signup")
});

router.get("/movies", (req, res, next) => {
    res.render("index", { "movieArray": movieArray });
});

router.get("movies/:id", (req, res, next) => {
    res.render("movie", { movieData: movieData, userRating: 4 })
})


module.exports = router;