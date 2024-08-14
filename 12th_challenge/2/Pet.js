class Pet {
  constructor(name, animal, age, breed, sound) { //constructor method - special method for creating and initializing an object created with a class.
    this.name = name;
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }
}

const ernie = new Pet('Ernie', 'dog', 1, 'pug', 'Woof!');
const valentina = new Pet('Valentina', 'cat', 8, 'akita', 'Meow!');

console.log(ernie, valentina);