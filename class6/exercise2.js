
let arrayOne = [];

function arrayList (start, end) {
    if (start > end) {
        for (let i = start; i >= end; i--) {
            arrayOne.push(i);
        }
        return arrayOne;
    }
    else if (end > start) {
        for (let i = start; i <= end; i++) {
            arrayOne.push(i);
        }
        return arrayOne
};
}

console.log(arrayList(34, 45));