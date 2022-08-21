
let menuItems = document.querySelector(".itemMenu");


let menuObjects = [
    {
        name: "Buster Bean Burrito", 
        price: 4.59},   
    {
        name: "Double Decker Cheese Wrecker",
        price: 5.49,},
    {
        name: "Big Salad",
        price: 7.99}]


        for (let food of menuObjects) {
            console.log(food.name)
        }

let foodNames = "";

for (food of menuObjects) {
    foodNames += "<li>" + food.name + "</li>";
}

menuItems.innerHTML = foodNames;
