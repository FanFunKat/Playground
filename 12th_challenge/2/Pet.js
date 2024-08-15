class Pet {
  constructor(name, animal, age, breed, sound) { //constructor method - special method for creating and initializing an object created with a class.
    this.name = name;
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  get activity() { // get method - allowed to create and dynamically retrieve a property value.
    const today = new Date();
    const hour = today.getHours();
    if (hour > 5 && hour <= 9) {
      return 'playing';
    } else if (hour > 9 && hour <= 10) {
      return 'eating';
    } else if (hour > 10 && hour <= 20) {
      return 'chilling';
    } else if (hour > 20 && hour <= 21) {
      return 'eating';
    } else if (hour > 21 && hour <= 23) {
      return 'playing';
    } else {
      return 'sleeping';
    }
  }

  speak() {
    console.log(this.sound);
  }
}

const ernie = new Pet('Ernie', 'dog', 1, 'pug', 'Woof!');
const valentina = new Pet('Valentina', 'cat', 8, 'akita', 'Meow!');

// console.log(ernie, valentina);

// ernie.speak();
// valentina.speak();

console.log(ernie.activity); // Accessing the activity property, which is a getter method, will not show up as an actual property attached to the object. Therefore, you won't see it when directly inspecting the object.
console.log(ernie);