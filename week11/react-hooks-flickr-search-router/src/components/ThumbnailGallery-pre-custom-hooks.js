
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

// TODO: import from some single file of global constants
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
const FLICKR_BASE_URL = 'https://api.flickr.com/services/rest';

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

  const [resultPhotos, setResultPhotos] = useState( [] );
  const [loading, setLoading] = useState( true );
  const [error, setError] = useState( null );

  // The router no longer provides params data via the 'match' prop,
  // it uses a custom hook:
  const params = useParams();


  // useEffect( () => {
  //   performSearch( params.searchText );
  // }, [] ); // an empty dependency array means 'run once at mount'

  useEffect( () => {
    performSearch( params.searchText );
  }, [params.searchText] ); // run the useEffect callback whenever this variable has changed (since the last render)


  async function performSearch( query ){
    console.log('FlickrSearch::performSearch()', query);

    // this.setState({ loading: true });
    setLoading( true );

    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: FLICKR_API_KEY,
      format: 'json',
      nojsoncallback: 1,
      text: query // should come from user input
    };

    try {
      const res = await axios.get( FLICKR_BASE_URL, {params: flickrParams} );
      console.log('response', res.data);
      // this.setState({
      //   resultPhotos: res.data.photos.photo,
      //   loading: false  // stop showing loading message
      // });
      setResultPhotos( res.data.photos.photo );
      setLoading( false ); // finished loading, show thumbnails via map()

    } catch( err ){
       console.log('Error in search AJAX: ', err);
       // this.setState({ error: err, loading: false });
       setError( err );
       setLoading( false );
    }


  } // performSearch()




    // Handle the special case where there is an error
    // if( this.state.error !== null ){
    //   // early return; never reach the later 'return'
    //   return <p>Sorry, there was an error loading your results. Try again.</p>;
    // }


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
