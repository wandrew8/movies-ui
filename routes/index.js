const { Router } = require('express');
const router = Router();
const movieData = {
    ID: 7,
    Title: "The Pianist",
    Year: 2002,
    Age: "18+",
    IMDb: 8.5,
    "Rotten Tomatoes": "95%",
    Netflix: 0,
    Hulu: 0,
    "Prime Video": 1,
    "Disney+": 1,
    Type: 0,
    Directors: "Roman Polanski",
    Genres: "Biography,Drama,Music,War",
    Country: "United Kingdom,France,Poland,Germany",
    Language: "English,German,Russian",
    Runtime: 150
}

const reviews = [
    {
        rating: 5,
        review: "This is an amazing movie that blah blah blah",
        userId: {
            firstName: "Andrew",
            lastName: "Weiss",
        },
        createdAt: "August 25th 2020"
    },
    {
        rating: 5,
        review: "This is an amazing movie that blah blah blah",
        userId: {
            firstName: "Andrew",
            lastName: "Weiss",
        },
        createdAt: "August 25th 2020"
    },
    {
        rating: 1,
        review: "This is an amazing movie that blah blah blah",
        userId: {
            firstName: "Andrew",
            lastName: "Weiss",
        },
        createdAt: "August 25th 2020"
    },
    {
        rating: 4,
        review: "This is an amazing movie that blah blah blah",
        userId: {
            firstName: "Andrew",
            lastName: "Weiss",
        },
        createdAt: "August 25th 2020"
    }
];

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
        "Prime Video": 0,
        "Disney+": 1,
        "Type": 0,
        "Directors": "Roman Polanski",
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

function getUserRating(array) {
    if(array.length > 0) {
        let sum = 0;
    array.forEach(movie => {
        sum += movie.rating;
    })
    return (sum / array.length).toFixed(1);
    } else {
        return 0;
    }
}

const avgRating = getUserRating(reviews);

function convertStarRating(rating) {
    const roundedRating = Math.round(rating)
    let ratingArray = [false, false, false, false, false];
    for(let i = 0; i < roundedRating; i++) {
        ratingArray[i] = true;
    }
    return ratingArray
}

router.get("/", (req, res, next) => {
    res.render("index", { 
        "movieArray": movieArray 
    });
});

router.get("/saved", (req, res, next) => {
    res.render("collection", {
        "watchList": movieArray,
        "favoriteMovies": movieArray
    });
});

router.get("/login", (req, res, next) => {
    res.render("login")
});

router.get("/login/signup", (req, res, next) => {
    res.render("signup")
});

router.get("/movies", (req, res, next) => {
    console.log(req.query);
    res.render("index", { 
        "movieArray": movieArray 
    });
});

router.get("/movies/:id", (req, res, next) => {
    res.render("movie", { 
        // Single movie object from database
        "movieData": movieData, 
        // Average rating toFixed(1)
        "avgRating": avgRating, 
        // An array of review objects
        "reviews": reviews, 
        // The length of reviews array (integer)
        "numReviews": reviews.length, 
        // The first item from the reviews array
        "firstReview": reviews[0], 
        // Boolean array with length of 5 for the first review
        // 3.2 = [true, true, true, false, false]
        "firstReviewStarRating": convertStarRating(reviews[0].rating), 
        // Boolean array for average rating
        "userStarRating": convertStarRating(avgRating) 
    })
});

router.get("/reviews/:movieId", (req, res, next) => {
    res.render("review", { 
        "reviews": reviews, 
        "numReviews": reviews.length, 
        "movieData": movieData, 
        "avgRating": avgRating, 
        "userStarRating": convertStarRating(avgRating) 
    })
});

router.get("/reviews/:movieId/add-review", (req, res, next) => {
    res.render("reviewForm", {
        "movieData": movieData
    })
});


module.exports = router;