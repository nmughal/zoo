(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {
    /**
    * Constructs a new animal
    * @param   {string}     name         Name of the animal
    * @param   {date}       dateOfBirth  Date the animal was born
    * @throws  {TypeError}               Error when the name is not a valid string or date is not a valid date
    * @return  {void}
    */
    constructor(name, dateOfBirth) {

      if(typeof(name) === 'string'){
        this.name = name;
      } else {
        throw new TypeError('Please provide a string for the name');
      }

      if(dateOfBirth instanceof Date) {
        this.dateOfBirth = dateOfBirth;
      } else if (dateOfBirth === undefined) {
        this.dateOfBirth = new Date();
      } else {
        throw new TypeError('Please provide a date');
      }
    }

    /**
    * Assigns a new name to animal
    * @param   {string}     newName   New name of the animal
    * @throws  {TypeError}            Error when newName is not a string
    * @return  {string}
    */
    changeName(newName){
      if(typeof(newName) === 'string') {
        this.name = newName;
      } else {
        throw new TypeError('Please provide a string for the name');
      }
    }

    /**
    * Returns a string with information about the animal object
    * @return  {string}  String of info
    */
    toString(){
      return this.name + ' was born on ' + this.dateOfBirth;
    }

    /**
    * Gets the current age of the animal (in whole year)
    * @return  {number}  The animal's age
    */
    animalAge(){
      let yearOfBirth = this.dateOfBirth.getFullYear();
      let currentYear = new Date().getFullYear();
      let age = currentYear - yearOfBirth;
      return age;
    }

  };



}());
