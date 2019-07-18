'use strict';
//global $ //

$('#dogForm').submit(function (event) {
  console.log('listener fired!');
  event.preventDefault();
  let dogBreed = $('#dogBreed').val();
  console.log(dogBreed);
  getDogs(dogBreed);
});

function getDogs (breed) {
  fetch (`https://dog.ceo/api/breed/${breed}/images/random`)
    .then (response => response.json())
    .then (json => {
      console.log(json);
      let status = json.status;
      let message = json.message;
      if (status === 'error') {
        $('ul').html(`<p>${json.message}</p>`);
      } else {
        showDogs(message);
      }
    })
    .catch (error => $('ul').append(`<p>${error.message}</p>`));
}

function linkToImg (link) {
  console.log('linkToImg fired!')
  return `
<img src=${link} class="dogImg">
`;}

function showDogs (link) {
  console.log('showDogs fired!');
  let dogHtml = linkToImg(link);
  console.log(dogHtml);
  $('ul').html(dogHtml);
}