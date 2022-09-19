let drinks = [
    {name: 'lemonade', price: 50},
    {name: 'lime', price: 10},
];

function sortDrinkByPrice(array) {
    let priceArray = array.sort(function(a, b) {
        return a.price - b.price;
    }
    );
        return priceArray;
    }

    console.log(sortDrinkByPrice(drinks));