
console.log('Loaded!');


const sayHello = function(){
  console.log('Oh hello!');
  // no 'return' statement in JS means default return
  // of undefined
}; // sayHello()


const runNicely = function( functionToRun ){
  console.log('Hi let me run nicely etc');
  console.log('function to run:', functionToRun);
  functionToRun();
  console.log('It was so nice etc etc...');
}; // runNicely()

// // Give runNicely a pre-defined function
// runNicely( sayHello );

// // Give runNicely an anonymous/inline function
// runNicely(  function(){
//   console.log('This is an inline/anonymous function');
// }  )

// arr.forEach( function(item){
//   console.log( item );
// });
//
// // What is Ruby's equivalent of an anonymous function?
// arr.each do |item|
//   puts item
// end

// Write your implementation of the each method:


const each = function( array, callback ){
  // YOU DO THIS

  for( let i = 0; i < array.length; i++ ){
    const currentItem = array[i];
    // console.log( currentItem );
    // INSTEAD of just assuming we always print out
    // each item from the array,
    // WE USE THE CALLBACK FUNCTION PROVIDED
    // and WE GIVE IT THE ITEM
    callback( currentItem, i );

  } // for

}; // each()

const arr = [ 'first', 'second', 'third' ];

// TODO: look into Array.prototype - CAUTION!

each(arr, function( item, index ){
  console.log(`Inside callback, item ${index}`, item);
});
// Output:
//
// Inside callback: first
// Inside callback: second
// Inside callback: third
