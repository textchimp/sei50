
console.log('Exercise JS loaded.');

// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif";

// (In JS) Set the content of each of the empty <span>s (nickname, favorites, hometown) to contain your own information.
const nicknameSpan = document.getElementById( 'nickname' );
// console.log( nicknameSpan );
nicknameSpan.innerHTML = 'Lucky';

const faveSpan = document.querySelector( '#favorites' );
// console.log( nicknameSpan );
faveSpan.innerHTML = 'Ruby, Nookie, Jess';

const hometownSpan = document.querySelector( '#hometown' );
// console.log( nicknameSpan );
hometownSpan.innerHTML = 'Sydders';




// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
const allLiTags = document.querySelectorAll('li');
// console.log(allLiTags);

for( let i = 0; i < allLiTags.length; i++ ){
  const currentLi = allLiTags[i];
  // console.log('current', currentLi);
  currentLi.className = 'listitem';
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
const myPic = document.createElement('img');
myPic.src = 'http://www.placekitten.com/100/100';
myPic.alt = 'Adorable kitty, not actually me';

// document.body.appendChild( myPic );


// Create a webpage with an h1 of "My Book List".
// Add a script tag to the bottom of the page.
// Copy this array of books:

const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

// Bonus: Use a ul and li to display the books.
const ulContainer = document.createElement('ul');

for( let i = 0; i < books.length; i++ ){
  const currentBook = books[i];
  // console.log( currentBook );

  // const pTag = document.createElement('p');
  // pTag.innerHTML = `<em>${ currentBook.title }</em> by ${ currentBook.author }`;
  //
  // document.body.appendChild( pTag ); // add to live DOM!

  const liTag = document.createElement('li');
  liTag.innerHTML = `<em>${ currentBook.title }</em> by ${ currentBook.author }`;

  if( currentBook.alreadyRead ){
    liTag.className = "read";
  } else {
    liTag.className = "unread";
  }

  ulContainer.appendChild( liTag );

} // for

// Append the <ul> tag with all its new <li> children to the actual DOM
document.body.appendChild( ulContainer );

// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.
