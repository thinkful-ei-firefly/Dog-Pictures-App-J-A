'use strict';
//global $ //

$('#dogForm').submit(function (event) {
  console.log('listener fired!');
  event.preventDefault();
  let dogNum = $('#dogNum').val();
  console.log(dogNum);
  getDogs(dogNum);
});

function getDogs (num) {
  fetch (`https://dog.ceo/api/breeds/image/random/${num}`)
    .then (response => response.json())
    .then (json => {
      console.log(json);
      let links = json.message;
      links.forEach(link => console.log(link));
      showDogs(links);
    })
    .catch (error => console.log(error));
}

function linkToImg (link) {
  console.log('linkToImg fired!')
  return `
<img src=${link} class="dogImg">
`;}

function showDogs (links) {
  console.log('showDogs fired!');
  let dogHtml = links.map(link => linkToImg(link));
  console.log(dogHtml);
  $('ul').html(dogHtml);
}