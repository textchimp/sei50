import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// load our custom hook
import { useFlickrSearchResults } from '../hooks/flickr';

const FlickrImage = ({ photo, size }) => {
  // const {photo, size} = props;

  return (
    <img
       src={`https://live.staticflickr.com/${ photo.server }/${ photo.id }_${photo.secret}_${ size }.jpg`}
       alt={ photo.title }
    />
  );

}; // generateImageURL()



// class ThumbnailGallery extends React.Component {
function ThumbnailGallery( props ){

    // The router no longer provides params data via the 'match' prop,
  // it uses a custom hook:
  const params = useParams();

  const { resultPhotos, loading, error } = useFlickrSearchResults( params.searchText );

    // Handle the special case where there is an error
    if( error !== null ){
      // early return; never reach the later 'return'
      return <p>Sorry, there was an error loading your results. Try again.</p>;
    }

    return (
      <div className="thumbnails">

        <h3>
          Results for { params.searchText }
        </h3>

      {
        // this.state.loading
        loading
        ?
        <p>Loading results...</p>
        :
        resultPhotos.map( photo => <FlickrImage photo={photo} size="q" /> )
      }
      </div>
    );


} // function ThumbnailGallery()

export default ThumbnailGallery;
