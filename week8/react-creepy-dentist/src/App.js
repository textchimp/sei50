import React from 'react';
import './App.css';

import Home from './Home'
import TeethSales from './TeethSales'
import Procedures from './Procedures'


import { Route, HashRouter as Router } from 'react-router-dom';

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

        <Router>

          {
            // This is like the Rails routes.rb file!

            //  get '/sales'  => 'sales#teeth'
          }
          <Route exact path="/" component={ Home } />
          <Route exact path="/sales" component={ TeethSales } />
          <Route exact path="/procedures" component={ Procedures } />

        </Router>


      </div>
    );

  } // render()

} // class App


export default App;
// so that index.js can 'import App from "./App"'
