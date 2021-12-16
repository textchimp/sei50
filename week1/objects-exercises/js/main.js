console.log('Objects JS loaded');
//
// The Reading List
//
// Keep track of which books you read and which books you want to read!
//
//     Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

const bookList = [
  // [0]:
  {
    title: 'It',
    author: 'Stephen King',
    alreadyRead: true
  },

  // [1]
  {
    title: 'Ulysses',
    author: 'James Joyce',
    alreadyRead: false
  },

  // [2]
  {
    title: 'Annihilation',
    author: 'Jeff Vandermeer',
    alreadyRead: true
  },

]; // bookList


//     Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

for( let i = 0; i < bookList.length; i++ ){
  // console.log(`"${ bookList[i].title }" by ${ bookList[i].author }`);
  const currentBook = bookList[ i ];

  // console.log(`"${ currentBook.title }" by ${ currentBook.author }`);

  //     Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

  // if( currentBook.alreadyRead ){
  //   console.log(`You already read "${ currentBook.title }" by ${ currentBook.author }`);
  // } else {
  //   console.log(
  //     `%cYou still need to read "${ currentBook.title }" by ${ currentBook.author }`,
  //     'color: yellow; font-size: 18pt; background-color: hotpink'
  //   );
  // }

  let readStatus = 'You still need to read';
  if( currentBook.alreadyRead ){
    readStatus = 'You have already read';
  }

  console.log(`${readStatus} "${ currentBook.title }" by ${ currentBook.author }`);

} // for each book










// The Recipe Card
//
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
//

const recipe = {
  title: 'Butterscotch',
  servings: 2,
  ingredients: [ 'butter', 'scotch', 'sugar', 'scotchy yoghurt' ]
};

console.log( recipe.title );
console.log(`Serves: ${ recipe.servings }`);
console.log('Ingredients: ');
console.log( recipe.ingredients.join('\n') );

//
// The Movie Database
//
// It's like IMDB, but much much smaller!
//
//     Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
//     Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
//         Maybe the join method will be helpful here

const movie = {
  title: 'Inherent Vice',
  duration: 120,
  stars: [ 'Joaquin Phoenix', 'Josh Brolin', 'Reese Witherspoon' ]
};

const printMovieInfo = function( movieToPrint ){
  console.log(`
    ${ movieToPrint.title } lasts for ${ movieToPrint.duration } minutes.
    It stars: ${ movieToPrint.stars.join(', ') }
  `);
}; // printMovieInfo()


bank.transfer('Jesus', 'Luke', 500);
bank.deposit('Jesus', 500);

bank.addAccount('Cameron', 100)
