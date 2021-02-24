// Initiate dotenv
require('dotenv').config();

// declare required variables
const keys = require('./keys.js');
// const spotify = new Spotify(keys.spotify);
const inquirer = require('inquirer');

// Movie Search helper function
const searchMovie = (query) =>{
  console.log('searching for ' + query);
}

// Spotify Search helper function
const searchSpotify = (query) =>{
  console.log('searching for ' + query);
}

// Concert search helper function
const concertSearch = (query) =>{
  console.log('searching for' + query);
}

const welcome = () =>{
  console.log('Welcome to the Multimedia search app!');
  console.log('-------------------------------------');
  mainMenu();
}

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

welcome();