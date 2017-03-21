(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Panda = class Panda extends Animal {

    /**
     * Accepts two arguments for instance of Panda
     * @param {String} name
     * @param {date} dateOfBirth
     * @return {void}
     */
    constructor(name, dateOfBirth){
      super(name, dateOfBirth);  // refers to the method of the same name on the parent class
      this.activity = 'sleeps'; // Panda-specific info
      console.log('Creating a Panda!');
    }

    /**
     * Static method which returns the scientific name of that species
     */
    static scientificName() {
      return 'Ailuropoda melanoleuca';
    }

    eatsBamboo(bamboo) {
      return this.name + ' loves to eat ' + bamboo;
    }

    giveBirth(name) {
      let baby = new Panda();
      baby.name = name;
      return baby;
    }

    /**
     * Returns a string with Panda's name and species
     */
    toString() {
      return this.name + ' is part of the ' + this.scientificName + ' species';
    }


  };
  
}());
