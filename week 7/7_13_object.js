let electronicsAmount = prompt("How many electronics would you like to order?");
let clothingAmount = prompt("How many clothing items would you like to order?");
let groceryAmount = prompt("How many groceries would you like to order?");
let areYouAMember = prompt("Are you a member?");

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
};


function calculatePrice(productType, quantity, isMember) {

    let prices = {
        electronics
    }
}

//console.log("$" + calculatePrice("electronics", 6, true));

//let order = {
    //electronics: electronicsAmount,
    //clothing: clothingAmount,
    //grocery: groceryAmount,
    
    //totalPrice: function(isMember) {
    // order.clothing()}
//};

//function orderTotal (electronicsQ, clothingQ, groceriesQ, isMember) {
    //calculatePrice ("electronics", electronicsQ, isMember)
//};

//console.log(order);//