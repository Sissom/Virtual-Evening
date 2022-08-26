const arrayOne = ['cheese', 3, 'pickles', false, false, true];
const arrayOneCount = arrayOne.filter(Boolean).length;
console.log(arrayOneCount);

const arrayTwo = [true, true, true, true, true, false, false];
const arrayTwoCount = arrayTwo.filter(Boolean).length;
console.log(arrayTwoCount);