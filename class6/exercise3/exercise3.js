let myArray = [
    [1,2],
    [1,1],
    [2,3]
]

let x = 0;
let y = 1;
let i;


function productSum() {

    let product = 1;

    for (i = 0; i < myArray.length; i++) {
        product = product * myArray[i];
    }
    return product;
}