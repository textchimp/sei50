
import React, { useState } from 'react';

import { useNavigate, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';

function SearchForm( props ){

  // Use the useSelector hook to get access to some part of the Redux global store
  // Like any hook, this is "reactive" - if the data changes, it triggers your
  // component to re-render (i.e. the whole SearchForm function runs again so
  // it gets the latest value, as if "notified" of changes to that global state)
  const counter = useSelector( state => state.counter );

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
      <h3>Redux counter value: { counter }</h3>
      <form onSubmit={ handleSubmit }>
        <input type="text" onChange={ handleInput } />
        <button>Search</button>
      </form>
      <Outlet/> { /*  This is where the new child route ThumbnailGallery should appear */ }
    </div>
  );

} // SearchForm()

export default SearchForm;
