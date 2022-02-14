
import React from 'react';

class ThumbnailGallery extends React.Component {

  render(){

    return (
      <div className="thumbnails">
      {
        this.props.loading
        ?
        <p>Loading results...</p>
        :
        this.props.photos.map( photo => <p key={ photo.id }>{ photo.title }</p> )
      }
      </div>
    );

  } // render()

} // class ThumbnailGallery

export default ThumbnailGallery;
