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