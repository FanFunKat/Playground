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

console.log(ernie.age);
console.log(ernie['age']);
console.log(ernie.breed);
console.log(ernie['breed']);

ernie.bark();
ernie['bark']();

ernie.fullDescription();

const prop = 'breed';
ernie[prop];