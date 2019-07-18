'use strict';
//global $ //

$('#dogForm').submit(function (event) {
  console.log('listener fired!');
  event.preventDefault();
  let dogNum = $('#dogNum').val();
  console.log(dogNum);
});