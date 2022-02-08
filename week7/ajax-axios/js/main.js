

const fetchSearchResults = function( searchText ){

  console.log('fetchSearchResults(): ', searchText);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${ searchText }`;

  axios.get( url )
    .then( function( res ){
      console.log('Success!', res.data);
      // a bunch of jquery to add divs to the page
      renderSearchResults( res.data );
    })
    .catch( function( err ){
      console.log('Problem!', err);
    });


}; // fetchSearchResults()


const renderSearchResults = function( data ){
  console.log('renderSearchResults()', data);
  const $output = $('#output');

  $output.show(); // in case some submits a search from a show page i.e. results are hidden
  $('#details').hide();  // as above


  $output.html(`<p>${ data.total_results } matches found:</p>`);

  let movies = '<ul>';

  data.results.forEach( function( movie ){
    // console.log( movie );
    movies += `
      <li data-movie-id="${ movie.id }">
        <img src="http://image.tmdb.org/t/p/w185${ movie.poster_path }" alt="${ movie.title }">
        <br>
        ${ movie.title }
      </li>
    `;
  });

  movies += '</ul>';

  $output.append( movies );

  // After the append above is done, add a click handler for
  // all the new <li> tags
  $('li').on('click', function(){
    const movieID = $(this).data('movie-id');
    console.log('Movie clicked', movieID );
    fetchMovieByID( movieID );
  });


}; // renderSearchResults()


const fetchMovieByID = function( id ){
  console.log('fetchMovieByID(): ', id);

  // Perform the AJAX request
  const url = `https://api.themoviedb.org/3/movie/${ id }?api_key=24d863d54c86392e6e1df55b9a328755`;
  axios.get( url )
    .then( function( res ){
      console.log('Movie info:', res.data );

      // should have renderMovieDetails( res.data );
      // instead after 6pm we cheat and use jQuery right here

      // Hide the search results
      $('#output').hide();
      $('#details').show(); // because we might have hidden this div when click previous back button

      $('#details').html(`
        <h3>${ res.data.title }</h3>
        <img src="http://image.tmdb.org/t/p/w185${ res.data.poster_path }" alt="${ res.data.title }">
        <p>${ res.data.overview }</p>
        <p>
          <strong>Budget:</strong> US$${ res.data.budget }
        </p>
        <button id="backButton">Back to Results</button>
      `);

      $('#backButton').on('click', function(){
        $('#details').hide();
        $('#output').show();
      }); // back button click handler

    })
    .catch( function( err ){
      console.log('Error loading Movie:', err);
    });

}; // fetchMovieByID()


$(function(){

  $('#userQuery').focus();  // put the cursor in the input - quick submit!

  $('#searchForm').on('submit', function( ev ){

    ev.preventDefault();
    console.log('Form submitted!');

    const query = $('#userQuery').val();
    fetchSearchResults( query );

  }); // submit handler


}); // document ready
