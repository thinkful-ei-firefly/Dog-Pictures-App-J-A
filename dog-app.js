'use strict';
//global $ //

$('#dogForm').submit(function (event) {
  console.log('listener fired!');
  event.preventDefault();
  let dogNum = $('#dogNum').val();
  console.log(dogNum);
});

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.jason())
    .then(respJson =>
      displayResults(respJson))
    .catch(error => alert('Something wrong. Try again'))
}



function displayResults(respJson) {

  $('.results-img').replaceWith(
    `<img src="${respJson.message}" class="results-img">`
  )
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});