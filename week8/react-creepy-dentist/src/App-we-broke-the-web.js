import React from 'react';
import './App.css';

import Home from './Home'
import TeethSales from './TeethSales'
import Procedures from './Procedures'

class App extends React.Component {

  // initialising state WITHOUT contstructor()
  state = {
    currentPage: 'default'
  };


  navigateTo = (destination) => {
    console.log('navigateTo()', destination);
    this.setState({ currentPage: destination })
  }; // navigateTo()


  render(){

    let pageContent;

    // This is our naive home-made router
    if( this.state.currentPage === 'sales' ){
      pageContent = <TeethSales />;
      
    } else if( this.state.currentPage === 'procedures' ){
      pageContent = <Procedures />;
    } else {
      pageContent = <Home />;  // defaults to Home page
    }



    return (
      <div className="App">
        <header>
          <h1>
            Dentistry is my passion<br/>
            It's my obsession.<br/>
            I need this.
          </h1>
          <nav>

            <a href="#" onClick={ () => this.navigateTo('home') }>Home</a> |&nbsp;
            <a href="#" onClick={ () => this.navigateTo('sales') }>Teeth Sales</a> |&nbsp;
            <a href="#" onClick={ () => this.navigateTo('procedures') }>Procedures</a>

            <br/>
            Current page: { this.state.currentPage }

          </nav>
          <hr/>
        </header>


        { pageContent }


        {
          // We want to show only ONE of these
          // at a time, to give the effect of
          // navigating between unique 'pages'
          // in this SPA;
          // i.e. we want to do what React calls
          // "conditional rendering"
        }



        {
          // We are back in normal JS now
          // ...so we can use normal comments
          //

          /* start of multiline comment

          When we write:

            < Home />

          ...what React does behind the scenes is

             // Ruby: Home.new()
             // i.e.  make an object from a class

             const homeInstance1 = new Home( props );
             homeInstance1.render();


          end of multine comment:  */
        }



      </div>
    );

  } // render()

} // class App


export default App;
// so that index.js can 'import App from "./App"'
