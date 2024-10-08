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

  get owner() { //getters always return a value
    return this._owner;
  };

  set owner(owner) { //setters always receives only 1 parameter and they don't return values. Thats why we need getter above^
    this._owner = owner; // the name of property can never be the same as the name of a getter or setter method name - backing property, convention: _name (underscore + name of property(=to name method))
    console.log(`setter called: ${owner}`);
  }

  speak() {
    console.log(this.sound);
  }
}

class Owner {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  set phone(phone) {
    const phoneNormalized = phone.replace(/[^0-9]/g, '');
    this._phone = phoneNormalized;
  }

  get phone() {
    return this._phone;
  }
}


const ernie = new Pet('Ernie', 'dog', 1, 'pug', 'Woof!');
const valentina = new Pet('Valentina', 'cat', 8, 'akita', 'Meow!');

// console.log(ernie, valentina);

// ernie.speak();
// valentina.speak();

console.log(ernie.activity); // Accessing the activity property, which is a getter method, will not show up as an actual property attached to the object. Therefore, you won't see it when directly inspecting the object.
console.log(ernie);

ernie.owner = new Owner('John', 'Ogrodowa 22');
ernie.owner.phone = '(058) 123-456-789';
console.log(ernie.owner);
console.log(ernie.owner.name);
console.log(ernie.owner.phone);