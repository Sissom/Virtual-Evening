function toArray(object) {
    let pairedKeys = Object.keys(object);
    let newArr = [];
    for (let i = 0; i < pairedKeys.length; i++) {
        newArr.push([pairedKeys[i], object[pairedKeys[i]]]);
    }
    return newArr;
}
console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));