outPrac.innerHTML += "<h1>Practice Exercises</h1>";

///calculate total rainfall
const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]
const totalRainfall = monthlyRainfall.reduce(
    (currentTotal, nextValue) => currentTotal += nextValue
)
console.log(totalRainfall)

///reduce an array of words to a single sentence.
const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
let sentence = words.reduce(
    (wholeSentence, nextWord) => wholeSentence += nextWord + " ", ""
)
sentence += "."
console.log(sentence)

outPrac.innerHTML += "<h2>Big Spenders</h2>";
// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => {
    let bigSpender = false;
    business.orders.forEach(num => {
        if (num >= 9000) {
            console.log("found Big Spender");
            bigSpender = true
        }
    })
    console.log(bigSpender);
    return bigSpender
})

console.log("Customers who've spent more than 9000", bigSpenders);

//print big spenders and their order totals to the dom.
bigSpenders.forEach(business => {
    /* CALCULATE ORDER SUMMARY */
    let totalOrders = business.orders.reduce(
        (currentTotal, nextValue) => currentTotal += nextValue,
        0
    )


    outPrac.innerHTML += `
            <h2>
                ${business.companyName}
                ($${totalOrders})
            </h2>
            <section>
                ${business.addressFullStreet}
            </section>
            <section>
                ${business.addressCity},
                ${business.addressStateCode}
                ${business.addressZipCode}
            </section>
        `;
    outPrac.innerHTML += "<hr/>";
});

/////////////////////////////////////////////////////////////////

outPrac.innerHTML += "<h2>Planets</h2>";

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetEl = document.getElementById("planets")
const planetFragment = document.createDocumentFragment()

console.log("planets array", planets);

planets.forEach(planet => {
    const planetName = document.createElement("h4");
    planetName.innerHTML = planet
    planetFragment.appendChild(planetName);
})

planetEl.appendChild(planetFragment);

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const uppercasePlanets = planets.map(planet => {
    const planetLetters = planet.split("")
    console.log("array of letters", planetLetters)
    planetLetters[0] = planetLetters[0].toUpperCase();
    console.log("array of letters with capitals", planetLetters);
    return planetLetters.reduce(
        (wholeWord, nextLetter) => wholeWord += nextLetter
    )
})

console.log("letters reduced back to words, with uppercase", uppercasePlanets);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const planetsWithE = planets.filter(planet => {
    const planetLetters = planet.split("")
    //returns true or false. If true, the planet in planets will become part of the new array.
    return planetLetters.includes("e");
})

console.log("plenets that include the letter E", planetsWithE);
