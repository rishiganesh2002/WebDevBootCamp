const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
.then(() => {
    console.log("CONNECTION SUCCESSFUL");
})
.catch(err => {
    console.log("Oh no error");
    console.log(err);
})

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number, 
    score: Number, 
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

// const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: "R"});

Movie.insertMany([{title: 'Iron Man', year: 2010, score: 8.8, rating: "G"}, {title: 'The Croods', year: 2012, score: 7.2, rating: "G"}, {title: 'Rocky', year: 1982, score: 9.9, rating: "E"},{title: 'Amadeus 2', year: 1999, score: 7.8, rating: "R"}])
.then(data => {
    console.log("It worked");
    console.log(data);
})
