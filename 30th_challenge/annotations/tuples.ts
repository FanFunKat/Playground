const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Tuple
// const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];