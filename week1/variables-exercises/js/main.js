
// debugger;

console.log('JS loaded!!!!!!');


// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Store the following into variables: number of children, partner's name, geographic location, job title. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

const numberOfChildren = 8;
const partnersName = 'Betty';
const geoLocation = 'Glasgow';
const title = 'chimney sweep';

// const fortune = "You will be a " + title + " in " + geoLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kids.";
const fortune = `You will be a ${title} in ${geoLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;

console.log( fortune );


console.log('------------------------------------');

// The Age Calculator
//
// Forgot how old someone is? Calculate it!
//
//     Store the current year in a variable.
//     Store their birth year in a variable.
//     Calculate their 2 possible ages based on the stored values.
//     Output them to the screen like so: "They are either NN or NN", substituting the values.
//

const currentYear = 2021;
const birthYear = 2000;

const ageAfterBirthday  = currentYear - birthYear;
const ageBeforeBirthday = ageAfterBirthday - 1;   // DRY

const ageOutput = `You are either ${ageBeforeBirthday} or ${ageAfterBirthday} years old.`;

console.log( ageOutput );

console.log('-----------------------');

// The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
//     Store your current age into a variable.
//     Store a maximum age into a variable.
//     Store an estimated amount per day (as a number).
//     Calculate how many you would eat total for the rest of your life.
//     Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

const currentAge = 30;
const maximumAge = 100;
const amountPerDay = 5;

const yearsRemaining = maximumAge - currentAge;
const amountPerYear  = amountPerDay * 365.25;
const totalSnacksRequrired = amountPerYear * yearsRemaining;

console.log(`You will need ${totalSnacksRequrired} to last you until the ripe old age of ${maximumAge} (${yearsRemaining} years).`);





//
// The Temperature Converter
//
// It's hot out! Let's make a converter.
//
//     Store a celsius temperature into a variable.
//     Convert it to fahrenheit and output "NN°C is NN°F".
//     Now store a fahrenheit temperature into a variable.
//     Convert it to celsius and output "NN°F is NN°C."

let celsiusTemp = 47;
// parentheses not necessary due to operator precedence rules (BODMAS)
let fahrenheitTemp = (celsiusTemp * 1.8) + 32;
console.log(`${celsiusTemp}°C to ${ fahrenheitTemp.toFixed(1) }°F.`);

// Now do the reverse:
fahrenheitTemp = 116.6;
celsiusTemp = (fahrenheitTemp - 32) / 1.8;
console.log(`${fahrenheitTemp}°F to ${ celsiusTemp.toFixed(1) }°C.`);



const sayHello = function(){
    console.log( "Hello!" );
};

const doSomethingFancy = function(){
    console.log( "Ooooh, fancy!" );
};

sayHello();
doSomethingFancy();


const addNums = function(firstNum, secondNum){
  const result = firstNum + secondNum;
  return result;
};

const sum = addNums(2, 5);
console.log( sum + 5 );
