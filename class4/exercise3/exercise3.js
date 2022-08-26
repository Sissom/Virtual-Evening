
        
    // grab everything we need
        const priceInput = document.querySelector("#price");
        const quantityInput = document.querySelector("#quantity");
        const total = document.querySelector(".total");
        const quantityLabel = document.querySelector(".quantity-label");

    // create the functions that we need
       function calculatePieCost() {
        const price = priceInput.value;
        const quantity = quantityInput.value;
        const cost = price * quantity;
        console.log(cost);
        total.innerText = '$' + cost.toFixed(2);
       }
       function updateQuantityLabel() {
        const quantity = quantityInput.value;
        quantityLabel.innerText = " " + quantity;
       }
    // on first run
       calculatePieCost();
       updateQuantityLabel();

    // add our event listeners
        priceInput.addEventListener('input', calculatePieCost)
        quantityInput.addEventListener('input', updateQuantityLabel)