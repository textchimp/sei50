
console.log('Youtube JS loaded.');


// Create an array of every link on the page using document.querySelectorAll( CSS-SELECTOR-GOES-HERE )


const addThumbnailToLink = function( linkNode ){

  // Find the current href using currentLink.href (assuming your DOM element loop variable is called currentLink), and store into a variable
  // Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
  const thumbnailURL = youtube.generateThumbnailUrl( linkNode.href );
  // console.log('thumbnail:', thumbnailURL);

  // Create an IMG element using document.createElement(tagName)
  const imgTag = document.createElement('img');

  // Set the "src" of the IMG element using newImage.src = 'something'
  imgTag.src = thumbnailURL;

  // Append the IMG to the link using element.appendChild(element)
  // document.body.appendChild( imgTag );
  linkNode.appendChild( imgTag );

}; // addThumbnailToLink()


const allLinks = document.querySelectorAll( 'a' );
// console.log( allLinks );



// Iterate through the array. In each iteration of the loop:
// for( let i = 0; i < allLinks.length; i++ ){
     // const currentLink = allLinks[i];
//   addThumbnailToLink( allLinks[i] );
// } // for

// allLinks.forEach( function( elem, i ){
//
//   console.log('Inside forEach callback', elem);
//   addThumbnailToLink( elem );
//
// });
//
// allLinks.forEach( addThumbnailToLink );

// for .. in is used to loop through the keys of an object

// for .. of is used to loop through the elements of an array
for( const item of allLinks ){
  console.log(item);
}
