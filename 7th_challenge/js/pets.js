/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

const pets = [
  {
    name: 'Joey',
    type: 'Dog',
    breed: 'Australian Shepherd',
    age: 2,
    photo: 'img/aussie.jpg',
  },
  {
    name: 'Comet',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: 5,
    photo: 'img/golden.jpg',
  },
  {
    name: 'Simba',
    type: 'Cat',
    breed: 'Persian',
    age: 3,
    photo: 'img/persian.jpg',
  },
  {
    name: 'Pugsley',
    type: 'Dog',
    breed: 'Pug',
    age: 2,
    photo: 'img/pug.jpg',
  },
  {
    name: 'Patches',
    type: 'Cat',
    breed: 'Domestic Shorthair',
    age: 5,
    photo: 'img/tabby.jpg',
  },
]

let message = ``

for (let i = 0; i < pets.length; i++) {
  message += `
    <h2>${pets[i].name}</h2>
    <h3>${pets[i].type} | ${pets[i].breed}</h3>
    <p>Age: ${pets[i].age}</p>
    <img src="${pets[i].photo}" alt="${pets[i].breed}"></img>
  `
}

document.querySelector('main').innerHTML = `${message}`