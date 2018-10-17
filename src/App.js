import React, { Component } from 'react';
import './App.css';
import accessToken from './secret.js';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

class App extends Component {
  componentDidMount() {
    mapboxgl.accessToken = accessToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-74.50, 40],
        zoom: 9
    });
  }

  render() {
    return (
      <div>
        <div id="map"/>
      </div>
    );
  }
}

export default App;
