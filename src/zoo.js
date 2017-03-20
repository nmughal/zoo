(function() {
  'use strict';

  let Animal = window.zoo.Animal;
  let Bird = window.zoo.Bird;
  let Cat = window.zoo.Cat;


  let bobby = new Bird ('Bobby', new Date ('3/1/1975'));
  console.log(bobby);
  // bobby.changeName('Robby');

  let billi = new Cat('Billi', new Date ('3/1/1975'));
  console.log(billi);
  billi.changeName('Tilli');
  console.log(billi.name);




}());
