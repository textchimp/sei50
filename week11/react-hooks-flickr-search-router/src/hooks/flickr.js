// src/hooks.flickr.js

// CUSTOM HOOK FOR FLICKR API

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '2f5ac274ecfac5a455f38745704ad084';
const BASE_URL = 'https://api.flickr.com/services/rest';

function useFlickrSearchResults( queryText ){

  const [resultPhotos, setResultPhotos] = useState( [] );
  const [loading, setLoading] = useState( true );
  const [error, setError] = useState( null );

  useEffect(
    () => fetchResults( queryText ),
    [queryText]
  );   // useEffect()


  async function fetchResults( query ){

    setLoading( true );

    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: API_KEY,
      format: 'json',
      nojsoncallback: 1,
      text: queryText
    };

    try {
      const res = await axios.get( BASE_URL, {params: flickrParams} );
      console.log('response', res.data);
      setResultPhotos( res.data.photos.photo );
      setLoading( false ); // finished loading, show thumbnails via map()
    } catch( err ){
       console.log('Error in search AJAX: ', err);
       setError( err );
       setLoading( false );
    }


  } // fetchResults()


  return  { resultPhotos, loading, error };

} // useFlickrSearchResults


// named export:
export { useFlickrSearchResults };
