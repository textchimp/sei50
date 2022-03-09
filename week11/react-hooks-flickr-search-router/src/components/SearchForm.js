
import React, { useState } from 'react';

function SearchForm( props ){

  const [searchText, setSearchText] = useState('');
  // const array = useState('');
  // const searchText = array[0];
  // const setSearchText = array[1];

  function handleInput( ev ){
    setSearchText( ev.target.value );
  } // handleInput()


  function handleSubmit( ev ){
    ev.preventDefault();
    props.history.push(`/search/${ searchText }`);
  } // handleSubmit()

  return (
    <div>
      <h3>{ searchText }</h3>
      <form onSubmit={ handleSubmit }>
        <input type="text" onChange={ handleInput } />
        <button>Search</button>
      </form>
    </div>
  );

} // SearchForm()

export default SearchForm;
