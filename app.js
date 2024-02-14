"use strict";

const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
const GIPHY_URL = "http://api.giphy.com/v1/gifs/"

/** This retrieves our url and calls the giphy API, to grab the gif url
 * and returns it
  */

async function getGif() {
  const searchTerm = $("#search-term").val();
  const params = new URLSearchParams({searchTerm});
  const url = `${GIPHY_URL}search?q=${params}&api_key=${API_KEY}`;
  const response = await fetch(url);
  const gifData = await response.json();
  //Giphy gives us 50 gifs, choose one randomly
  const gifUrl = gifData.data[getRandomNumber(0, 50)].images.original.url;

  return gifUrl;
}

/** return a random number between min and max*/
function getRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

/** Adding image to the webpage, and appending to our gif container section */

function prependGif(url) {
  const gifImage = $("<img>", {
    src: url,
    class: 'gif'
  });

  $('.gif-container').prepend(gifImage);
}

/** controller function gets form data, calls giphy api and adds gif to
 * DOM.
 */
async function getAndShowGif() {
  const gifUrl = await getGif();
  prependGif(gifUrl);
}

/** calls getAndShowGif when button is clicked */

$(".submit").on("click", getAndShowGif);

/** Event listener-- listening for clicks to remove all gifs in gif container */

$('.removeButton').on('click', function () {
  $('.gif-container').empty();
});
