// import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import { useSelector, useDispatch } from 'react-redux';

// load our custom hook
import { useFlickrSearchResults } from '../hooks/flickr';

import FlickrImage from './FlickrImage';


// class ThumbnailGallery extends React.Component {
function ThumbnailGallery( props ){

  // Disabled for testing
  // const counter = useSelector( state => state.counter );
  // const dispatch = useDispatch(); // so we can dispatch actions to update the Redux store

    // The router no longer provides params data via the 'match' prop,
  // it uses a custom hook:
  const params = useParams();

  const { resultPhotos, loading, error } = useFlickrSearchResults( params.searchText );


  function handleClick(){
    console.log('button clicked');
    dispatch({ type: 'clickCounter/incrementedBy', payload: 20 });
  }

    // Handle the special case where there is an error
    if( error !== null ){
      // early return; never reach the later 'return'
      return <p>Sorry, there was an error loading your results. Try again.</p>;
    }

    return (
      <div className="thumbnails">
        {
          // <h2>Counter: { counter }</h2>
        }

        <button onClick={ handleClick }>Increment Counter</button>
        <h3>
          Results for { params.searchText }
        </h3>

      {
        // this.state.loading
        loading
        ?
        <p>Loading results...</p>
        :
        resultPhotos.map( photo => <FlickrImage key={photo.id} photo={photo} size="q" /> )
      }
      </div>
    );


} // function ThumbnailGallery()

export default ThumbnailGallery;
