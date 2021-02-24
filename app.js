// Initiate dotenv
require('dotenv').config();

// declare required variables
const keys = require('./keys.js');
const inquirer = require('inquirer');
const axios = require('axios');

// Movie Search helper function
const searchMovie = (query) =>{
  const queryUrl = 'http://www.omdbapi.com/?apikey=trilogy&t=' + query;

  console.log(queryUrl);
  
  axios.get(queryUrl).then(function(response){
    console.log('Title: ' + response.data.Title);
    console.log('Release Year: ' + response.data.Year);
    console.log('IMDB rating: ' + response.data.imdbRating);
    console.log('Rotten Tomatoes Rating: ' + response.data.Ratings[1].Value);
    console.log('Languages: ' + response.data.Language);
    console.log('actors: ' + response.data.Actors);
  }

  ).catch((err)=>{
    console.log(err);
  })
}

// Spotify Search helper function
const searchSpotify = (query) =>{
  console.log('searching for ' + query);
}

// Concert search helper function
const concertSearch = (query) =>{
  console.log('searching for' + query);
}

// Welcome menu
const welcome = () =>{
  console.log('Welcome to the Multimedia search app!');
  console.log('-------------------------------------');
  mainMenu();
}

// Main menu with inquirer prompt
const mainMenu = () =>{
  inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to search?',
      name: 'menuChoice',
      choices: [
        'Search movies',
        'Search songs',
        'Search nearby concerts',
        'Exit'
      ]
    }
  ]).then(function(data){
    // Switch function based on use input
    switch(data.menuChoice){
      
      case 'Search movies':
        movieMenu();
      break;

      case 'Search songs':
        songMenu();
      break;

      case 'Search nearby concerts':
        concertMenu();
      break;

      default:
        console.log('Thank you, have a nice day!');
    }
  })
}

// Movie Menu inquirer prompt
const movieMenu = () =>{
  inquirer.prompt([
    {
      type: 'input',
      message: 'Please enter the name of the movie that you would like to look up.',
      name: 'movie'
    }
  ]).then(function(data){
    searchMovie(data.movie);
  })
}

// Song menu inquirer prompt
const songMenu = () =>{
  inquirer.prompt([
    {
      type: 'input',
      message: 'Please enter the name of the song that you would like to look up.',
      name: 'song'
    }
  ]).then(function(data){
    searchMovie(data.song);
  })
}

// Concert menu inquirer prompt
const concertMenu = () =>{
  inquirer.prompt([
    {
      type: 'input',
      message: 'Please enter the name of the artist whose concerts you would like to look up.',
      name: 'artist'
    }
  ]).then(function(data){
    searchMovie(data.artist);
  })
}

// Initiate the welcome menu when the file is run
welcome();