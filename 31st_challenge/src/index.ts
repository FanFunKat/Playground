/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user)
customMap.addMarker(company);


// window.onload = function () {
//   if (typeof google !== 'undefined' && google.maps) {
//     new CustomMap('map');
//   } else {
//     console.error("Google Maps API was not loaded.");
//   }
// };

