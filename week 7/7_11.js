function kilosToPounds(weight) {
    return weight * 2.2;
}

console.log(kilosToPounds(12).toFixed(2) + " lbs");
console.log(kilosToPounds(14).toFixed(2) + " lbs");
console.log(kilosToPounds(0).toFixed(2) + " lbs");
console.log(kilosToPounds(-5).toFixed(2) + " lbs");

function poundsToKilos(weight) {
    return weight / 2.2;
}

console.log(poundsToKilos(1).toFixed(2) + " kg");
console.log(poundsToKilos(0.512).toFixed(2) + " kg");
console.log(poundsToKilos(2342324323).toFixed(2) + " kg");