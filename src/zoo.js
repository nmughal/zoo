(function() {
  'use strict';

  let Animal = window.zoo.Animal;
  let Penguin = window.zoo.Penguin;
  let Panda = window.zoo.Panda;


  let bobby = new Penguin('Bobby', new Date ('3/1/1975'));
  console.log(bobby);
  // bobby.changeName('Robby');

  console.log(Penguin.scientificName() );

  let billi = new Panda('Billi', new Date ('3/1/1975'));
  console.log(billi);

  billi.changeName('Tilli');

  console.log(billi.name);
  console.log(billi.getDob());



}());
