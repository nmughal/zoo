(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Penguin = class Penguin extends Animal {

    /**
     * Accepts two arguments for instance of Penguin
     * @param {String} name
     * @param {Date} dateOfBirth
     * @return {void}
     */
    constructor(name, dateOfBirth){
      super(name, dateOfBirth); //refer to the method of the same name on the parent class
      this.activity = 'swims'; // Penguin-specific info
      console.log('Creating a Penguin');
    }

    /**
     * Static method
     * @return {string} returns the scientific name of that species
     */
    static scientificName() {
      return 'Spheniscidae';
    }

    eatsFish(fish){
      return this.name + ' loves to eat ' + fish;
    }

    giveBirth(name, dateOfBirth) {
      let baby = new Penguin(name, dateOfBirth);
      return baby;
    }

    /**
     * Returns a string with Penguin's name and species
     */
    toString() {
      return this.name + ' is part of the ' + Penguin.scientificName() + ' species';
    }


  };

}());
