(function() {
  'use strict';

  let Animal = window.zoo.Animal;
  let Penguin = window.zoo.Penguin;
  let Panda = window.zoo.Panda;



  try {
    let bobby = new Penguin('Bobby', new Date ('3/1/1975'));
    console.log(bobby);
  } catch (err) {
    if (err instanceof TypeError) {
      console.warn(err);
    } else {
      throw err;
    }
  }

  try {
    let errorValue = new Animal();
  } catch (err) {
      if (err instanceof TypeError) {
        console.warn(err);
      } else {
        throw err;
      }
  }

  try {
    let errorValue = new Penguin('Bobby', [1,2,3]);
  } catch (err) {
    if (err instanceof TypeError) {
      console.warn(err);
    } else {
      throw err;
    }
  }

  let bobby = new Penguin('Bobby', new Date ('3/1/1975'));
  console.log(bobby.name + ' is ' + bobby.animalAge() + ' years old');
  console.log(bobby.eatsFish('fish'));
  console.log(bobby.toString());
  console.log(bobby.giveBirth('Tobby', new Date('3/1/2016')));





  let billi = new Panda('Billi', new Date ('3/1/1976'));
  console.log(billi);
  billi.changeName('Tilli');
  console.log(billi.name + ' is ' + billi.animalAge() + ' years old');
  console.log(billi.eatsFood('carrots'));
  console.log(billi.toString());
  console.log(billi.giveBirth('Willi', new Date ('4/1/2016')));

}());
