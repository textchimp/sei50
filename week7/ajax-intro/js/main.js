
const loadTrivia = function(){

  const xhr = new XMLHttpRequest(); // make a new instance


  // This is the ancient way of attaching callbacks to
  // handle events: an object (like a DOM node) has a
  // bunch of 'onXXXXXXX' properties, which you can
  // store functions in - your function will be run
  // by the browser at the appropriate time, i.e in
  // response to the event firing;
  // in this example, the event is that we have
  // received some data from the remote server
  // xhr.onreadystatechange = function(){
  //   console.log('onreadystatechange callback running!');
  //   console.log('state:', xhr.readyState);
  //
  //   if( xhr.readyState === 4 ){
  //     // 4 means DONE, so we have all the response data
  //     console.log('data', xhr.response);
  //   }
  //
  // }; // onreadystatechange callback

  xhr.onload = function(){

    // Use JSON.parse() to turn the response
    // WHICH IS JUST A JSON STRING, not an object,
    // into a real JS object with keys and values
    const data = JSON.parse( xhr.response );

    // HELPFUL FOR DEBUGGING: set into global variable
    window.response = data;


    console.log('data:', data.results);

    $('#output').html(`<p>${data.text}</p>`); // add to the page!

  } // onload callback


  const userQuery = $('#userQuery').val(); // get form input contents


  // xhr.open('GET', `http://www.numbersapi.com/${ userQuery }?json`);

  xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=alien`);



  xhr.send(); // This line DOES NOT BLOCK, unlike Ruby

  console.log('This line runs BEFORE we get a response... too soon!'); // asynchronous


}; // loadTrivia()


$(function(){
  console.log('DOM is loaded!');
  //loadTrivia();

  $('#loadMore').on('click', function(){
    loadTrivia();
  }); // click handler

}); // document ready callback
