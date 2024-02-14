"use strict";
console.log("Let's get this party started!");

async function getGif() {
  const searchTerm = $("#search-term").val();
  const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
  const response = await fetch(url);
  const gifData = await response.json();
  console.log("url is:", gifData.data[0].images.original.url);
}

$(".submit").on("click", getGif);