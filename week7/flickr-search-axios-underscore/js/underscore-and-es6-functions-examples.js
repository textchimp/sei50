
// example data
const bros = [ 'Groucho', 'Harpo', 'Chico' ];

// 2 styles of using Underscore:

// #1:
// _.each(bros, function( item ){
//   console.log( item );
// });

// #2: more like Ruby, more like jQuery: $(this).html('')
_(bros).each( function( item, i ){
  // This function is run by .each for every item in the array,
  // and each item is passed in to the function as its 'item' argument
  console.log( i, item );
});

const groucho = {
  name: 'Groucho',
  instrument: 'Guitar',
  vice: 'cigars'
};

_(groucho).each( function( val, key ){
  console.log(`${key}: ${val}`);
});

// forEach is not a method for objects!
// groucho.forEach( function( item, index ){
//   console.log(index, item);
// });


// ES6 version:
bros.forEach( function( item, index ){
  console.log( index, item );
});

console.log('ES6 Arrow functions =========================');

// Simplest version:
// - no parentheses around single argument (they are optional)
// - no curly brackets around the function body
// - function body can only be a single expression
// - implicit return of the single expression's value
// (i.e. no need for 'return' keyword)
bros.forEach( item => console.log(item) );

// Longer version:
// - multiple arguments (parameters) REQUIRE parentheses
// - NO arguments also REQUIRES empty parentheses
bros.forEach( (item, index) => console.log(index, item) );

// Slightly longer again:
// - curly brackets are REQUIRED for more than one statement
// in the function body
// - no more implicit return; need to use 'return' keyword whenever
//   curly brackets are involved
bros.forEach( (item, index) => {
  console.log('index:', index);
  console.log('item:', item);
});

// Creating named functions looks the same:
// const myFunc = function(){
//   // code
// };
//
// const myFunc = () => {
//
// };


console.log('map() ========================');

// map() transforms an input array of values into
// an output array of values, according to what
// your callback function returns from each iteration

const nums = [ 1, 2, 3, 4, 5, 6 ];

const output = _(nums).map( function( item ){
  console.log('input item:', item);
  const result = item * 2;
  console.log('output item:', result);
  return result;
});
console.log('output of map():', output);


// Use a forEach to do what .map just did:
const handmadeOutput = [];
for( let i = 0; i < nums.length; i++ ){
  const item = nums[i];
  const result = item * 2;
  handmadeOutput.push( result );
}
console.log('handmade version of map() output:', handmadeOutput);

// Using .map() with arrow function + implicit return
const mapArrowOutput = _(nums).map( item => item * 2 );
console.log('mapArrowOutput:', mapArrowOutput);

// es6 map:
const es6MapOutput = nums.map( item => item * 2 );
console.log('es6MapOutput', es6MapOutput);

// const bros = [ 'Groucho', 'Harpo', 'Chico' ];
const uppercaseBros = bros.map( bro => bro.toUpperCase() );
console.log('uppercaseBros', uppercaseBros);

console.log('reduce() ==============================');

// reduce() (aka 'inject' in Ruby) takes an input array,
// and "boils it down" to a single value, by repeatedly
// applying the code you give it in your callback function;
// as with map(), reduce() cares about the return value
// from your callback

// [ 1, 2, 3, 4, 5, 6 ]

const sum = _(nums).reduce( function( runningTotal, item ){
  console.log('_____________');
  console.log('runningTotal:', runningTotal);
  console.log('item:', item);
  const newTotal = runningTotal + item;
  console.log('newTotal:', newTotal);
  return newTotal; // this becomes the NEXT fuction call's 'runningTotal'
}, ''); // optional second arg as starting value for 'runningTotal'

// [ 1, 2, 3, 4, 5, 6 ]
// (1 + ( 2 + (3 + (4 + (5 + (6))))))
console.log('reduce sum:', sum);

// es6 .reduce():
const es6Sum = nums.reduce( function( runningTotal, item ){
  return runningTotal + item;
}, 5000);
console.log('es6Sum', es6Sum);


// ActiveRecord-style Underscore methods
// - for search through data, usually an array of objects

const brothers = [
  { name: 'Groucho', instrument: 'guitar', vice: 'cigars',     age: 44, nums: [1,2,3,5] },
  { name: 'Harpo',   instrument: 'harp', vice: 'mutism',       age: 42, nums: [1,2,3] },
  { name: 'Chico',   instrument: 'guitar', vice: 'infidelity', age: 39, nums: [1,2,3,5] },
];

// Like ActiveRecord's Brother.find_by( instrument: 'guitar', age: 39 )
const guitarist = _(brothers).findWhere( { instrument: 'guitar', age: 39 } );
console.log('guitarist:', guitarist);

// ES6 equivalent: slightly different, in that it does NOT assume the array elements are all
// objects; so instead of passing in a "search criteria object" as argument, you have to give
// a test function: the first array element which causes the function to return true is the
// final return value of the .find() itself
const es6Guitarist = brothers.find( function( item ){
  return item.instrument === 'guitar';
});

// const es6Guitarist = brothers.find( item => item.instrument === 'guitar'  );

console.log('es6Guitarist:', es6Guitarist);


// Like ActiveRecord .where: find ALL matching rows, i.e. Message.where( user_id: 3 )
const allGuitarists = _(brothers).where( { instrument: 'guitar' } );
console.log('allGuitarists', allGuitarists);

// es6 version: filter()
// as with .find(), it requires you to provide a test function (a.k.a "predicate function")
const es6AllGuitarists = brothers.filter( bro => bro.instrument === 'guitar' );
console.log('es6AllGuitarists', es6AllGuitarists);

// How do I just get a true/false answer as to whether ANY element in the array
// passes some test?
const areThereAnyHarpists = brothers.some( bro => bro.instrument === 'harp' );
console.log('areThereAnyHarpists', areThereAnyHarpists);

const isEveryoneAbove30 = brothers.every( bro => bro.age > 30 );
console.log('isEveryoneAbove30', isEveryoneAbove30);
