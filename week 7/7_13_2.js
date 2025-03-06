function calculatePrice (productType, quantity, isMember) {

    let prices = {
        electronics: 100,
        clothing: 50,
        grocery: 20
// step 1
    }
    let totalPrice;

    if (productType == "Electronics") {
        totalPrice = prices.electronics * quantity;// step 2
    }
    else if (productType == "Clothing") {
        totalPrice = prices.clothing * quantity;
    }
    else if (productType == "Grocery") {
        totalPrice = prices.grocery * quantity;
    }

    //console.log(prices)//

    if (isMember) {
        totalPrice = totalPrice * 0.9;
    }
    else if (quantity > 5) {
        totalPrice = totalPrice * 0.95;
    }
    else if (totalPrice > 500) {
        totalPrice = totalPrice - 50;
    }

    return totalPrice;
}

const order = {
    electronics: 6,
    clothing: 3,
    grocery: 5,
    totalPrice: function() {
        const electronicsTotal = calculatePrice("Electronics", this.electronics, false);
        const clothingTotal = calculatePrice("Clothing", this.clothing, true);
        const groceryTotal = calculatePrice("Grocery", this.grocery, true);

        const total = electronicsTotal + clothingTotal + groceryTotal;
        return {

        }
        // this.electronicsTotal = electronicsTotal;
        // this.clothingTotal = clothingTotal;
        // this.groceryTotal = groceryTotal;
        // this.total = total;
    }
}

const orderTotal = order.totalPrice();

console.log("Electronics Total: $", orderTotal.electronicsTotal);
console.log("Clothing Total: $", orderTotal.clothingTotal);
console.log("Grocery Total: $", orderTotal.groceryTotal);
console.log("Order Total: $", orderTotal.total);


