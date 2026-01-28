#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
const characterId = '18';

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const films = JSON.parse(body).results;
    const count = films.reduce((acc, film) => {
      // Check if the character ID exists within the characters array of the film
      if (film.characters.find((character) => character.includes(characterId))) {
        return acc + 1;
      }
      return acc;
    }, 0);
    console.log(count);
  }
});
