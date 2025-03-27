import { useSelector } from "react-redux";

export function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    // let cost = 0;
    // filteredCars.forEach((car) => {
    //   cost += car.cost;
    // });

    // return cost;

    return filteredCars.reduce((acc, car) => acc + car.cost, 0);
  });

  return (
    <div div className="car-value" >
      Total cost: ${totalCost}
    </div >
  );
}