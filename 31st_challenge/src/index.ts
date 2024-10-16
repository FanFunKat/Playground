/// <reference types="@types/google.maps" />
// import { User } from './User';
// import { Company } from './Company';
import { CustomMap } from './CustomMap';

// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);

window.onload = function () {
  if (typeof google !== 'undefined' && google.maps) {
    new CustomMap('map');
  } else {
    console.error("Google Maps API was not loaded.");
  }
};