let degree = document.querySelector("#degree")
let fromUnit = document.querySelector("#fromUnit")
let toUnit = document.querySelector("#toUnit")
let result = document.querySelector("#result")
let convertBtn = document.querySelector("#convert-btn")
let resultValue = document.querySelector("#resultValue")

const tempConvert = () =>{
    // console.log("hlo")
        let data = parseFloat(degree.value); // Input value ko number mein convert karna
        // console.log(data)
        let from = fromUnit.value; // From unit
        // console.log(from)
        let to = toUnit.value; // To unit
        // console.log(to)
        let resultValue;
        result.style.fontSize = "24px"; 
        // resultValue.style.fontSize = "20px"
        
        if(from === "Celcius"){
            if(to === "Fahrenheit"){ 
                resultValue = (data * 9/5) + 32; //celsius to fahrenheit
                // console.log(result)
            }
            else if (to === "Kelvin") {
                resultValue = data + 273.15; // Celsius to Kelvin
            // console.log(result)
            } else {
                resultValue = data; // Celsius to Celsius
                }
        }


        if(from === "Fahrenheit"){
            if(to === "Celcius"){
                resultValue = (data - 32) * 5/9;
                // °C = (°F - 32) × 5/9,
                // console.log("isha") //Fahrenheit to celcius
            }
            else if(to === "Kelvin"){
                resultValue = (data - 32) * 5/9 + 273.15;
                // K = (°F + 459.67) × 5/9
                // console.log("isha") // Fahrenheit to kelvin
            } else{
                resultValue = data;
                // console.log(isha) // Fahrenheit to Fahrenheit
            }
        }


        if(from === "Kelvin"){
            if(to === "Celcius"){
                resultValue = data - 273.15;
                // C = K - 273.15.
                // console.log("isha") //Kelvin to Celcius
            }
            else if( to === "Fahrenheit"){
                resultValue = (data - 273.15) * 9/5 + 32;
                // °F = (K − 273.15) × 1.8 + 32
                // console.log("isha") // Kelvin to Fahrenheit
            }
            else{
                resultValue = data;
                // console.log("isha") //Kelvin to Kelvin
            }
        }
    //   console.log(resultValue);
    result.textContent = `Converted Value: ${resultValue.toFixed(2)}`; 
    //   result.appendChild(resultValue ); 
}


convertBtn.addEventListener("click", tempConvert)























// let fromUnit = document.querySelector("#fromUnit"); // Unit se select karne ka dropdown
// let degree = document.querySelector("#degree"); // User se degree ka input
// let toUnit = document.querySelector("#toUnit"); // Unit tak select karne ka dropdown
// let button = document.querySelector("#convertBtn"); // Convert button
// let resultDiv = document.querySelector("#result"); // Result display karne ke liye div

// const tempConvert = () => {
//     let data = parseFloat(degree.value); // Input value ko number mein convert karna
//     let from = fromUnit.value; // From unit
//     let to = toUnit.value; // To unit
//     let result;

//     // Conversion logic
//     if (from === "C") {
//         if (to === "F") {
//             result = (data * 9/5) + 32; // Celsius to Fahrenheit
//         } else if (to === "K") {
//             result = data + 273.15; // Celsius to Kelvin
//         } else {
//             result = data; // Celsius to Celsius
//         }
//     } else if (from === "F") {
//         if (to === "C") {
//             result = (data - 32) * 5/9; // Fahrenheit to Celsius
//         } else if (to === "K") {
//             result = (data - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin
//         } else {
//             result = data; // Fahrenheit to Fahrenheit
//         }
//     } else if (from === "K") {
//         if (to === "C") {
//             result = data - 273.15; // Kelvin to Celsius
//         } else if (to === "F") {
//             result = (data - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
//         } else {
//             result = data; // Kelvin to Kelvin
//         }
//     }

//     // Result display karna
//     resultDiv.textContent = `Converted temperature: ${result.toFixed(2)} °${to}`; 
// }

// button.addEventListener("click", tempConvert); // Button click par function chalana
