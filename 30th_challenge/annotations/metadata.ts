import 'reflect-metadata'

const plane = {
  colors: 'red'
};

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 12, plane);

// console.log(plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);


// console.log(note);
// console.log(height);

//metadata about property

Reflect.defineMetadata('note', 'hi there', plane, 'color');

const note = Reflect.getMetadata('note', plane, 'color');

console.log(note);
