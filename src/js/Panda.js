(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Panda = class Panda extends Animal {

    /**
    * Constructs a Panda
    * @param   {String}  name          Name of Panda
    * @param   {date}    dateOfBirth   DOB of Panda
    * @throws  {TypeError}             Error when super is invalid
    * @return  {void}
    */
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
      this.activity = 'sleeps'; // Panda-specific info
    }

    /**
    * Static method
    * @return {string} returns the scientific name of that species
    */
    static scientificName() {
      return 'Ailuropoda melanoleuca';
    }

    eatsFood(food) {
      if(!food || (typeof food !== 'string')) {
        throw TypeError('Please enter a valid food');
      } else {
        return this.name + ' loves to eat ' + food;
      }
    }

    giveBirth(name, dateOfBirth) {
      try {
        let baby = new Panda(name, dateOfBirth);
        return baby;
      } catch (err) {
        throw new TypeError('Failed');
      }
    }

    /**
    * Returns a string with Panda's name and species
    */
    toString() {
      return this.name + ' is part of the ' + Panda.scientificName() + ' species';
    }


  };

}());
