import { useSelector } from "react-redux";

export function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return filteredCars.reduce((acc, car) => acc + car.cost, 0);
  });

  return (
    <div className="car-value" >
      Total cost: ${totalCost}
    </div >
  );
}