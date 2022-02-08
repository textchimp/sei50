

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

  $output.html(`<p>${ data.total_results } matches found:</p>`);

  let movies = '<ul>';

  data.results.forEach( function( movie ){
    // console.log( movie );
    movies += `
      <li>
        <img src="http://image.tmdb.org/t/p/w185${ movie.poster_path }" alt="${ movie.title }"> 
        <br>
        ${ movie.title }
      </li>
    `;
  });

  movies += '</ul>';

  $output.append( movies );


}; // renderSearchResults()



$(function(){

  $('#userQuery').focus();  // put the cursor in the input - quick submit!

  $('#searchForm').on('submit', function( ev ){

    ev.preventDefault();
    console.log('Form submitted!');

    const query = $('#userQuery').val();
    fetchSearchResults( query );

  }); // submit handler


}); // document ready
