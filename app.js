"use strict";

/** This retrieves our search word and calls the giphy API, to grab gif of our
 * search word--> appends it to our html.
  */
//  TODO: input this later
const APIKEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
//TODO: make a conductor -- decomposition on getGif

async function getGif() {

  const searchTerm = $("#search-term").val();
  const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
  const response = await fetch(url);
  const gifData = await response.json();
  const gifUrl = gifData.data[0].images.original.url;
  // TODO: random url index

  makeGif(gifUrl, searchTerm);
}

//not calling it here because javascript is calling this async
$(".submit").on("click", getGif);

/** Adding image to the webpage, and appending to our gif container section */

function makeGif(url, searchTerm) {

  const gifImage = $("<img>", {
    src: url,
    class: 'gif',
    alt: `this is a gif of ${searchTerm}`
  });

  $('.gif-container').append(gifImage);
}

/** Event listener-- listening for clicks to remove all gifs in gif container */

$('.removeButton').on('click', function () {
  $('.gif-container').empty();
});