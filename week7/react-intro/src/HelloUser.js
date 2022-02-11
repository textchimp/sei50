
import React from 'react';

// Ruby: class User < ApplicationRecord
class HelloUser extends React.Component {

  render(){

    console.log( 'props', this.props );

    return (
      <div>
        Hello { this.props.name }!
        <br/>
        <img src={`http://placekitten.com/${this.props.imgWidth}/${this.props.imgHeight}`} />
      </div>
    );

  } // render()

} // class HelloUser

export default HelloUser;
