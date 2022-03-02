const list = {};


const people = [
  {name: 'Timmy', age: 34, job: 'builder'},
  {name: 'Janet', age: 34, job: 'plumber'},
  {name: 'Timmy', age: 34, job: 'fireman'},
  {name: 'Janet', age: 34, job: 'fitter'},
  {name: 'Timmy', age: 34, job: 'joiner'},
  {name: 'Fred', age: 34, job: 'teacher'},
  {name: 'Nicole', age: 34, job: 'coder'},
  {name: 'Jamie', age: 34, job: 'teaching assistant'}
];

/*
needs to look like:
list = {
  Janet: [
    {name: 'Janet', age: 34, job: 'plumber'},
    {name: 'Janet', age: 34, job: 'fitter'},
  ],
  Timmy: [
    {name: 'Timmy', age: 34, job: 'builder'},
    {name: 'Timmy', age: 34, job: 'fireman'},
    {name: 'Timmy', age: 34, job: 'joiner'},
  ],
  etc
}
*/

// 1. Loop over the main array 'people' and do something with each object
// 2. Since we need to create a key in 'list' for each of the values of
//    the 'name' key in the 'people' array, we should check whether
//    that name already exists as a key of the object

// 1.
//  a: for( let = 0; i < people.length; i++){ const person = people[i]; ... }
//  b: people.forEach( person => {} )
//  c: for( const person of people){}

// for( let i = 0; i < people.length; i++ ){

for( const person of people ){

  console.log('person:', person.name);

  // list[ person.name ] = person; // no good, overwrites

  if( person.name in list ){
    list[person.name].push( person ); // assumes array exists
  } else {
    // name is NOT a key in list, i.e. this is the
    // first time we have seen this person's name
    list[person.name] = [ person ];
  }


} // for


console.log(list);


// O( N^2 )
// Object.values(people).forEach(p => {
//   let key = p.name
//   list[key] = []
//   people.forEach(p => {
//     if (p.name === key) {
//       list[key].push(p)
//     }
//   })
// })


const dataSet = {
  first: {
    next: {
      array1: [{name: 'Katarina', age: 45}],
      array2: [{name: 'Zelensky W', age: 45}],
      array3: [{name: 'Joachim', age: 45}],
      array4: [{name: 'Zelensky Y', age: 23}],
    },
    last: {
      theseObjects: {
        whereAmI: [
          {firstKey: 'Fruit', secondKey: true},
          {firstKey: 'Vegetable', secondKey: false},
          {firstKey: 'Meat', secondKey: false},
          {firstKey: 'Meat', secondKey: true},
          {firstKey: 'Fruit', secondKey: false},
        ]
      }
    }
  }
};

// 1. Assume the input data is always within
//    dataSet.first.next - otherwise we need to
//    do some kind of recursive depth search of
//    the object - but looking for what?
// 2. Assume that the values of those 'arrayX' keys
//    are arrays which always have a single object
//    within them -- NO, loop over those arrays

let zelenskysFound = [];
const belongings = {};

Object.values(dataSet.first.next).forEach( peopleArray => {
  // console.log('peopleArray', peopleArray);
  peopleArray.forEach( person => {
    // console.log('single person object: ', person);
    if( person.name.startsWith('Zelensky') ){
      console.log('Found a Zelensky!', person);
      // if( firstZelenskyFound === null ){
      //   // this must be the first one we've seen
      //   firstZelenskyFound = person.name;
      // }
      zelenskysFound.push( person.name ); // keep track of order
      belongings[person.name] = []; // set up the keys of our final object

    } // if we found a Zelensky
  }); // loop over the nested array, i,e, values of array1, array2, etc...
}); // Object.values(dataSet.first.next).forEach


const transformationRules = {
  'Meat':  belongings[ zelenskysFound[0] ],
  'Fruit': belongings[ zelenskysFound[1] ]
}

dataSet.first.last.theseObjects.whereAmI.forEach( groceryItem => {

  // console.log('item', groceryItem);
  // if( groceryItem.firstKey === 'Meat' ){
  //   const firstZelenskyName = zelenskysFound[0];
  //   belongings[ firstZelenskyName ].push( groceryItem );
  // } else if( groceryItem.firstKey === 'Fruit' ){
  //   const secondZelenskyName = zelenskysFound[1];
  //   belongings[ secondZelenskyName ].push( groceryItem );
  // }

  if( groceryItem.firstKey in transformationRules ){
    transformationRules[ groceryItem.firstKey ].push( groceryItem );
  }


}); // each grocery item





// get all of the people called Zelensky individual / uniques and put all meat inside the first Zelensky and fruit inside the second Zelensky in a new object called belongings
