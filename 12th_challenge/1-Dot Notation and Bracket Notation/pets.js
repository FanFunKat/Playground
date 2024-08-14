const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function () {
        console.log('Woof!');
    },
    fullDescription: function () {
        console.log(this.animal + ' ' + this.breed)
    }
}

//-----------------------------------------------------
// ACCESSING OBJECT PROPERTIES
//-----------------------------------------------------

console.log(ernie.age);
console.log(ernie['age']);
console.log(ernie.breed);
console.log(ernie['breed']);

ernie.bark();
ernie['bark']();

ernie.fullDescription();

const prop = 'breed';
ernie[prop];

//-----------------------------------------------------
// CHANGING AND ADDING OBJECT PROPERTIES
//-----------------------------------------------------

ernie.age = 2;
ernie['age'] = 2;

ernie.color = 'black';

console.log(ernie);