/// <reference types="@types/google.maps" />
// import { User } from './User';
// import { Company } from './Company';

// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);

function initMap() {
  const mapElement = document.getElementById('map');
  if (mapElement) {
    new google.maps.Map(mapElement, {
      zoom: 1,
      center: { lat: 0, lng: 0 }
    });
  } else {
    console.error("Element 'map' nie został znaleziony.");
  }
}

window.onload = function () {
  if (typeof google !== 'undefined' && google.maps) {
    initMap();
  } else {
    console.error("Google Maps API nie zostało załadowane.");
  }
};