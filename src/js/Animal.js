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
      this.name = name;
      this.dateOfBirth = dateOfBirth;

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
