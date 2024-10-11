//interface, new type whit generic name
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

// new object
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

// function
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);