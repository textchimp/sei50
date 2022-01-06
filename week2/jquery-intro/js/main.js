
console.log('jQuery main JS loaded.');

// Get the paragraph with the id of "intro"
const $introPara = $('#intro');
console.log('$introPara', $introPara);

// Set some CSS
//- first one property at a time
$introPara.css('background-color', 'white');

// - and now several properties at once,
// using an object as the argument
$introPara.css({
  fontSize: '18pt',
  fontFamily: 'Comic Sans MS'
});

// Select and modify on the same line
// $('p').css('background-color', 'hotpink')

// Chaining multiple methods to the same query result
// $('p')
//   .css('background-color', 'hotpink')
//   .fadeOut(5000);


// This only gives you the HTML contents of the first match
$('p').html();  // GETTER

// This works
// $('p').html('change all p tags to this'); // SETTER


// Make a new image and append it to the first H1 tag
const $img = $("<img>");

$img.attr({
  src: 'http://www.placekitten.com/200/200',
  alt: 'Adorable kitty'
});

$('h1').append( $img );

// $("<img>")
//   .attr({
//     src: 'http://www.placekitten.com/200/200',
//     alt: 'Adorable kitty'
//   })
//   .appendTo( 'h1' );
