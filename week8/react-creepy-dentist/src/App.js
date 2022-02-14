import React from 'react';
import './App.css';

import Home from './Home'
import TeethSales from './TeethSales'
import Procedures from './Procedures'


import { Route, HashRouter as Router, Link } from 'react-router-dom';

class App extends React.Component {


  render(){

    return (
      <div className="App">
        <Router>
          <header>
            <h1>
              Dentistry is my passion<br/>
              It's my obsession.<br/>
              I need this.
            </h1>
            <nav>

              <Link to="/">Home</Link> |&nbsp;
              <Link to="/sales">Teeth Sales</Link> |&nbsp;
              <Link to="/procedures">Procedures</Link>

            </nav>
            <hr/>
          </header>


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
