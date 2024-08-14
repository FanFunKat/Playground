const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// function getJSON(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         let data = JSON.parse(xhr.responseText);
//         resolve(data);
//       } else {
//         reject(Error(xhr.statusText));
//       }
//     };
//     xhr.onerror = () => reject(Error("Network Error"));
//     xhr.send();
//   });
// }

function getProfiles(json) {
  const profiles = json.people.map(person => {
    const craft = person.craft;
    return fetch(wikiUrl + person.name)
      .then(response => response.json())
      .then(profile => {
        return { ...profile, craft };
      })
      .catch(err => console.log('Error Fetching Wiki: ', err));
  });
  console.log(Promise.all(profiles));
  return Promise.all(profiles);
}

function generateHTML(data) {
  data.forEach(person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    // Check if request returns a 'standard' page from Wiki
    if (person.type === 'standard') {
      section.innerHTML = `
        <img src=${person.thumbnail.source}>
        <span>${person.craft}</span>
        <h2>${person.title}</h2>
        <p>${person.description}</p>
        <p>${person.extract}</p>
      `;
    } else {
      section.innerHTML = `
        <img src="img/profile.jpg" alt="ocean clouds seen from space">
        <h2>${person.title}</h2>
        <p>Results unavailable for ${person.title}</p>
        ${person.extract_html}
      `;
    }
  });
}

btn.addEventListener('click', (event) => {
  event.target.textContent = 'Loading...';
  fetch(astrosUrl)
    .then(response => response.json())
    .then(getProfiles)
    .then(generateHTML)
    .catch(err => {
      // peopleList.innerHTML = '<h3>Error</h3><p>Something went wrong. Unable to load profiles</p>';
      console.log(err)
    })
    .finally(() => event.target.remove())
});