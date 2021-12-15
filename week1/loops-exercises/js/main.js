
console.log('Loops JS loaded');

// The even/odd reporter
//
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for( let i = 0; i <= 20 ; i++ ){
  // console.log( i );

  if( i % 2 === 0 ){
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }


} // for







// Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10 inclusive. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for( let i = 0; i <= 10; i++ ){
  //console.log(`${i} * 9 = ${ i * 9 }`);

  for( let j = 1; j <= 10; j++ ){
    console.log(`${i} * ${j} = ${ i * j } `)
  } // inner for loop

} // outer for loop (i)


// The Grade Assigner
//
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

const assignGrade = function( mark ){

  // let score = '';

  if( mark > 90 ){
    return 'A';
  } else if( mark > 80 ){
    return 'B';
  } else if( mark > 70 ){
    return 'C';
  } else if( mark > 60 ){
    return 'D';
  } else if( mark > 50 ){
    return 'E';
  } else {
    return 'F';
  }

  // return score;

}; // assignGrade()



// Test assignGrade() by feeding it all legal mark values
for( let i = 100; i >= 0; i-- ){
  // console.log(i);
  // const result = assignGrade( i );
  console.log(`A mark of ${i} gives a grade of ${ assignGrade(i) }`);
}
