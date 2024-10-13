import { faker } from '@faker-js/faker';

class User {
  name: string;
  location: {
    lat: number;
    lng: number
  };

  constructor() {
    this.name = 'John'
    this.location = {
      lat: 0,
      lng: 0
    }
  }
}