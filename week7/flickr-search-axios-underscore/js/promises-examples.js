
// WHAT IS A PROMISE?

// A promise is a way of dealing with asynchronous
// behaviour in JS, i.e. a consistent way of dealing
// with data that takes a while to become available;
// a promise is a promise ABOUT data arriving sooner
// or later... or not arriving (throwing an error)

// A promise is either in a state of
// PENDING - waiting for the data to arrive
// FULFILLED:
//    - RESOLVED - we have the data
//    - REJECTED - there was an error getting the data

// Promises are 'then'-able

axios.get('http://www.numbersapi.com/42?json')
  .then( function( res ){
    // We provide a callback function as the argument
    // to .then() which is run if the promise resolves
    // i.e. we have the data, success, all is well
    console.log('We got the data!', res.data.text);
    // return 'hello';
  }) // end of .then()
  .catch( function( err ){
    console.log('UH OH! There was a problem:');
    console.log( err.response.status);
    console.dir( err );
  })
  // .then( function( ){
  //   // THIS IS OPTIONAL if you need a cleanup stage
  //   // This final .then will ALWAYS run whether
  //   // the promise resolved or rejected
  //   console.log('We are finished.' );
  // }); // no more chaining!

// // axios.get('...').then( f ).catch( f ).then( f )


// When dealing with Promises, INSTEAD of
// a then-catch chain to deal with resolved/rejected
// promises, we can use a hot new syntax called:
// async/await:

const getApiData = async function(){

  try {
    const res = await axios.get('http://www.numbersapi.com/42?json');
    console.log( 'awaited data', res.data ); // if we get here, the promise RESOLVED
  } catch( err ){
    console.log('There was a problem: ', err);
  }
  //  finally {
  //   // This is the equivalent of the final .then() after the .catch in the above example
  //   console.log('Always runs');
  // }

  console.log('When does this run?'); // This DOES actually run last! WTF Javascript

  // BECAUSE of the 'await' in front of the method which returns a promise,
  // JS acts the same way Ruby HTTParty.get() does - the code will BLOCK
  // or wait UNTIL the response comes in, and it will give you the data
  // as the return value INSTEAD of a promise object -
  // i.e. instead of ".then( function( res ){"  where 'res' is the response object,
  // we now get that directly back from "await axios.get()" and save it into the
  // const variable - so we can GUARANTEE it's there by the time the next line runs.
  // BUT you need to declare the containing function as 'async' - and that means
  // the containing function NOW RETURNS A PROMISE.

  return 'DONE';

}; // getApiData()

const result = getApiData();
// console.log(result);
