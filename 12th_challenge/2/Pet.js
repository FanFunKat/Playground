class Pet {
  constructor(name, animal, age, breed) { //constructor method - special method for creating and initializing an object created with a class.
    this.name = name;
    this.animal = animal;
    this.age = age;
    this.breed = breed;
  }
}

const ernie = new Pet('Ernie', 'dog', 1, 'pug');
const valentina = new Pet('Valentina', 'dog', 8, 'akita');

console.log(ernie, valentina);