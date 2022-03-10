
import React, { useState } from 'react';

import { useNavigate, Outlet } from 'react-router-dom';

function SearchForm( props ){

  const [searchText, setSearchText] = useState('');
  // const array = useState('');
  // const searchText = array[0];
  // const setSearchText = array[1];

  // Instead of the router providing the 'history' object
  // (which include the 'push()' method we need,
  // v6 now gives us the history object via a hook: useHistory()
  // .... EXCEPT it's changed again, and now to get the equivalent
  // of the push method we use the hook called useNavigate()
  const navigate = useNavigate();

  function handleInput( ev ){
    setSearchText( ev.target.value );
  } // handleInput()


  function handleSubmit( ev ){
    ev.preventDefault();
    // props.history.push(`/search/${ searchText }`);
    navigate(`/search/${ searchText }`);
  } // handleSubmit()

  return (
    <div>
      <h3>{ searchText }</h3>
      <form onSubmit={ handleSubmit }>
        <input type="text" onChange={ handleInput } />
        <button>Search</button>
      </form>
      <Outlet/> { /*  This is where the new child route ThumbnailGallery should appear */ }
    </div>
  );

} // SearchForm()

export default SearchForm;
