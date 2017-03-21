(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {
    /**
     * @param {string} name
     * @param {date} dateOfBirth
     * @return {void}
     *
     */
    constructor(name, dateOfBirth) {

      if(typeof(name) === 'string'){
        this.name = name;
      } else {
        let err = new TypeError('Please provide a string for the name');
        throw err;
      }

      if(dateOfBirth instanceof Date) {
        this.dateOfBirth = dateOfBirth;
      } else {
        let err = new TypeError('Please provide a date');
        throw err;
      }

      console.log('Creating a new Animal!');
      }

    getDob() {
      return this.dateOfBirth;
    }

    changeName(newName){
      this.name = newName;
    }

    printName(){
      console.log(this.name);
    }

    toString(){
      return this.name + ' was born on ' + this.dateOfBirth;
    }

    /**
     * Gets the current age of the Animal (in whole year)
     * @return {number} Returns the animal's age
     */
    animalAge(){
      let yearOfBirth = this.dateOfBirth.getFullYear();
      let currentYear = new Date().getFullYear();
      let age = currentYear - yearOfBirth;
      return age;
    }

  };



}());
