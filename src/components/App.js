import React, { Component } from 'react';

import {Grid, Row, Col, Navbar} from 'react-bootstrap';

import logo from '../logo.svg';
import '../App.css';
import scriptLoader from 'react-async-script-loader';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>        
      </Navbar>

      <Grid>
        <Row>
          <Col sm={12}>
              <SearchBar></SearchBar>              
          </Col>
          <Col sm={12}>
          <WeatherList></WeatherList>          
          </Col>            
        </Row>
      </Grid>
      </div>
    );
  }
}
export default scriptLoader(
  ["https://maps.googleapis.com/maps/api/js?key=AIzaSyBqYc2rfHOTxNKRZYoippE1W4nGsuG0lAE"]
)(App)
//export default App;
