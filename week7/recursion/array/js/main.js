// console.log('Array recursion loaded.');


const arr = [ 'a', 'b', 'c' ];

// arr.forEach( item => console.log(item) );

const recursive_each = (array, indent=0) => {

  // if( indent === 100 ){
  //   debugger;
  // }

  // Recursive strategy:
  // 1. Remove the first item from array and print
  // 2. Give the REMAINING items in the array to
  //    to a recursive function call --- until
  //    there are no remaining items

  // i.e. solve the problem in terms of smaller
  // versions of itself

  // const first = array[0];        // 'a'
  // const rest  = array.slice(1);  // [ 'b', 'c' ]
  const [first, ...rest] = array;

  // To visualise the nesting with our console.log
  const spacing = Array(indent).fill('            ').join('');

  // 1. Print first item
  console.log(`${spacing}>>> starting recursive_each( [${array}], ${indent} )`);
  console.log(`${spacing} first value: ${first}`);

  // 2. If there are remaining items, give them
  //    to the same function recursively
  if( rest.length > 0 ){
    recursive_each( rest, indent+1 ); // recursive call
  }

  console.log(`${spacing}<<< returning from recursive_each( [${array}], ${indent} )`);

}; // recursive_each()

debugger;
recursive_each( arr );
