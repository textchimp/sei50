
console.log('DOM JS loaded.');

// Functions review!

// Functions in JS are "first-class":
// they live in variables, i.e. they are "values"/data

const x = 1;
const f = function(){  console.log('Hello!');   };


const sayHello = function(){
  console.log('%cHello from sayHello()', 'color: green');
};



// Write a new function that will run ANOTHER function
// for us; we will give it the function to run for
// us as an argument, and it will run it "nicely"
const runNicely = function( functionToRunNicely ){

  debugger;

  console.log('Hello! I am runNicely(), and I am about to run the function you have given me. I hope that is to your liking!');

  // run the provided function
  functionToRunNicely();



  console.log('It was a real pleasure to fun your function for you. Goodbye from runNicely().');

}; // runNicely()

///// end of callback functions preview

// DOM access methods:
// grab tags from the page via JS and manipulate them

const firstPara = document.getElementById( 'intro' );
console.log('first para:', firstPara);

const allParagraphs = document.getElementsByTagName( 'p' );
console.log('all P tags:', allParagraphs);

const allSpecial = document.getElementsByClassName( 'special' );
console.log('all .special class tags:', allSpecial);


// Add a new image to the page

// First create a blank "detached" node
const newImgTag = document.createElement('img');

// Set the essential attributes:
newImgTag.src = 'http://www.placebear.com/300/300';
newImgTag.alt = 'A couple of cuddly huge bears';

newImgTag.style.border = '2px dashed pink';


// Now also create a link tag to wrap the image in
const newLinkTag = document.createElement( 'a' );
newLinkTag.href = 'http://www.placebear.com';

// Now append the img tag to the a tag
newLinkTag.appendChild( newImgTag );

/// Attach the outermost link tag (node) to the DOM
firstPara.appendChild( newLinkTag );

// Attach the new tag to the actual DOM
// document.body.appendChild( newImgTag );

// firstPara.appendChild( newImgTag );


// Click event handler

// 1. Select the element from the DOM and save into variable
const button = document.querySelector( '#eventExample' );
console.log(button);

// 2. Attach our callback function to this element
//    using .addEventListener()
button.addEventListener('mouseover', function(){
  // This code is within the callback function
  // It runs ONLY when the click event happens
  console.log('I was clicked!');
  console.log( Math.random() );
});

// save the timer ID returned by setInterval so we can use it later to cancel to the interval loop
const intervalID = setInterval( function(){
  console.log('Hello from anonymous interval callback');
  console.log( Math.random() );
}, 9000 );
// clearInterval( intervalID );

const billImg = document.querySelector('#bill');

billImg.style.top = '0px';  // The value set in the CSS file won't be visible to JS

setInterval( function(){
  // billImg.width += 10;
  const currentTopOffset = parseInt( billImg.style.top );
  console.log(currentTopOffset);
  const newTopOffset = currentTopOffset + 10;
  billImg.style.top = newTopOffset + 'px';
}, 100 );
