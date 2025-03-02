let temperatureString = prompt("Enter the temperature in celcius", "12");

if (temperatureString !== null) {
    let temperature = parseFloat(temperatureString);

    if (!isNaN(temperature)) {
        let clothing;

        if (temperature >= 25) {
            clothing = "Shorts";
          } else if (temperature >= 15) {
            clothing = "T-shirt";
          } else {
            clothing = "Jacket";
          }

          console.log("Recommended clothing: " + clothing)
    }
    else {
        console.log("User cancelled input.")
    }
}
