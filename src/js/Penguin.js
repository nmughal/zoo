(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Penguin = class Penguin extends Animal {

    /**
    * Accepts two arguments for instance of Penguin
    * @param   {String}  name          Name of Penguin
    * @param   {date}    dateOfBirth   DOB of Penguin
    * @return  {void}
    */
    constructor(name, dateOfBirth) {
      try {
        super(name, dateOfBirth);
      } catch (err) {
        throw new TypeError('Failed');
      }
      this.activity = 'swims'; // Penguin-specific info
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
      try {
        let baby = new Penguin(name, dateOfBirth);
        return baby;
      } catch (err) {
        throw new TypeError('Failed');
      }
    }

    /**
    * Returns a string with Penguin's name and species
    */
    toString() {
      return this.name + ' is part of the ' + Penguin.scientificName() + ' species';
    }


  };

}());
