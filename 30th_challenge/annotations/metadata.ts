import 'reflect-metadata'

class Plane {
  color: string = 'red';

  @markFunction('This is a secret')
  fly() {
    console.log('frrrruuuu');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string | symbol) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);

// const plane = {
//   colors: 'red'
// };

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 12, plane);

// console.log(plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);


// console.log(note);
// console.log(height);

//metadata about property

// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note);
