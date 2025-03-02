function calculatePrice(productType, quantity, isMember) {
    let price;

    if (productType === "electronics") {
        price = 100;
    }
    else if (productType === "clothing") {
        price = 50;
    }
    else if (productType === "grocery") {
        price = 20;
    };

    let totalPrice = price * quantity;

    if (isMember) {
        totalPrice = totalPrice * 0.9;
    }

    if (quantity > 5) {
        totalPrice = totalPrice * 0.95;
    }

    if (totalPrice > 500) {
        totalPrice = totalPrice - 50;
    }

    return totalPrice
}

console.log("$" + calculatePrice("electronics", 6, false))