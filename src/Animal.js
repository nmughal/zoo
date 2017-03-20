(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {
    constructor(name, dateOfBirth) {
      this.name = name;
      this.species = 'Birds'

      console.log('Creating a new Animal!');
    }

    changeName(newName){
      this.name = newName;
    }

    printName(){
      console.log(this.name);
    }

    toString(){
      return this.name + ' is a member of the ' + this.species;
    }

  };







}());
