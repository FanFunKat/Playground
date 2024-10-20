// const numberArray = [0, 10, -1, 5];

// numberArray.sort()
// console.log(numberArray)

import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([12057, -56, -588, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
