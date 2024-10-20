import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([12057, -56, -588, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
