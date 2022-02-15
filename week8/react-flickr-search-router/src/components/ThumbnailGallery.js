
import React from 'react';
import axios from 'axios';

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



class ThumbnailGallery extends React.Component {


  state = {
    resultPhotos: [],
    loading: false,  // controls whether or not to show loading message
    error: null  // whether or not to show an error message
  }


  // As soon as this component is mounted on the DOM
  // (by the router), it knows it will have a search
  // query in the path (which it can acces via the
  // router params), and it should do an AJAX request
  // to the Flickr API immediately
  componentDidMount(){
    this.performSearch( this.props.match.params.searchText );
  } // componentDidMount()



  // To do something when props or state changes, we use a
  // lifecycle method called:
  componentDidUpdate( prevProps, prevState ){
    console.log('componentDidUpdate(): >>>>>>>>>>>>>>');
    console.log('old props: ', prevProps.match.params.searchText);
    console.log('cur props: ', this.props.match.params.searchText);
    console.log('old state: ', prevState.resultPhotos);
    console.log('cur state: ', this.state.resultPhotos);
    console.log('====================================');

    // do this.performSearch( this.props.match.params.searchText) here... which internally calls:
    if( prevProps.match.params.searchText !== this.props.match.params.searchText ){
      // if the router param prop containing the user search is
      // different to the old one, it means a new search has
      // been submitted, so it's time to re-submit the AJAX request
      this.performSearch( this.props.match.params.searchText );
    }

    // if the old vs new props are NOT different, then
    // componentDidUpdate() must be running due to a change of state,
    // i.e. the setState() done by performSearch

  } // componentDidUpdate



  performSearch = async (query) => {
    console.log('FlickrSearch::performSearch()', query);

    // If we don't do this, we never see the loading message
    this.setState({ loading: true });

    // When you refactor to use unique Route components,
    // you will need to use componentDidMount() in your
    // FlickrSearchResults component - similar to the
    // Creepy Dentist <ProcedureSearchResults> component

    // componentDidUpdate() -- look into this and the args it gives you
    // to work out how to do a new search from a search results route
    // (assuming the search form is visible on every route)
    // BEWARE OF INFINITE LOOPS - turn off the axios.get() and
    // do a console.log instead while testing this!!!

    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: FLICKR_API_KEY,
      format: 'json',
      nojsoncallback: 1,
      text: query // should come from user input
    };

    // axios.get( FLICKR_BASE_URL, { params: flickrParams } )
    //  .then( res => {
    //     console.log('response', res.data);
    //  })
    //  .catch( err => {
    //    console.log('Error in search AJAX: ', err);
    //  });

    try {
      const res = await axios.get( FLICKR_BASE_URL, {params: flickrParams} );
      console.log('response', res.data);
      this.setState({
        resultPhotos: res.data.photos.photo,
        loading: false  // stop showing loading message
      });
    } catch( err ){
       console.log('Error in search AJAX: ', err);
       this.setState({ error: err, loading: false });
    }


  }; // performSearch()




  render(){

    // Handle the special case where there is an error
    if( this.state.error !== null ){
      // early return; never reach the later 'return'
      return <p>Sorry, there was an error loading your results. Try again.</p>;
    }


    return (
      <div className="thumbnails">

        <h3>
          Results for "{ this.props.match.params.searchText }":
        </h3>

      {
        this.state.loading
        ?
        <p>Loading results...</p>
        :
        this.state.resultPhotos.map( photo => <FlickrImage photo={photo} size="q" /> )
      }
      </div>
    );

  } // render()

} // class ThumbnailGallery

export default ThumbnailGallery;
