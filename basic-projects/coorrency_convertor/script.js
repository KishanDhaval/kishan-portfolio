// Define the base URL for the Open Exchange Rates API
const BaseUrl = "https://open.er-api.com/v6/latest";

// Selectors for dropdowns and button
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const writeData = document.querySelector("h5")

// Event listeners for dropdowns
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        // Setting default selections based on dropdown name and country code
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = true;
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = true;
        }

        // Appending the new option to the current dropdown
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Function to update flag image
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

// Event listener for button click
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".input input");
    let amtval = amount.value;
    if (amtval === "" || amtval < 1) {
        amtval = 1;
        amount.value = "1";
    }
    let newUrl = `${BaseUrl}?base=${fromCurr.value}&symbols=${toCurr.value}`;

    try {

        const response = await fetch(newUrl);
        const data = await response.json();
        const rate = data.rates[toCurr.value];
        const convertedAmount = amtval * rate;
        console.log(`${amtval} ${fromCurr.value} = ${convertedAmount} ${toCurr.value}`);
        amount.value= convertedAmount
        writeData.innerText =` 1 ${fromCurr.value} = ${rate} ${toCurr.value}`
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
