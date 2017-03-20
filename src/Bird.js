(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Bird = class Bird extends Animal {
    constructor(name, dateOfBirth){
      super(name, dateOfBirth);

      console.log('Creating a Bird');
    }

    changeName(newName) {
      this.name = newName;
    }


  };







}());
