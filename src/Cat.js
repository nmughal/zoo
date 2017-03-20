(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Cat = class Cat extends Animal {
    constructor(name, dateOfBirth){
      super(name, dateOfBirth);
    }

    printName(){
      super.printName();

      console.log('I am a Cat!');
    }



  };




}());
