
// import { useDispatch } from 'react-redux';

const FlickrImage = ({ photo, size }) => {
  // const {photo, size} = props;

  // const dispatch = useDispatch();

  return (
    <img
       src={`https://live.staticflickr.com/${ photo.server }/${ photo.id }_${photo.secret}_${ size }.jpg`}
       alt={ photo.title }
    />
  );
  //onClick={ () => dispatch({ type: 'favourites/added', payload: photo })  }

}; // generateImageURL()

export default FlickrImage;
