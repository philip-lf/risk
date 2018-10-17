import React, { Component } from 'react';
import './App.css';
import accessToken from './secret.js';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

class App extends Component {
  componentDidMount() {
    mapboxgl.accessToken = accessToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/philip-lf/cjncsbyzp1lro2smfatrek0tq',
        center: [-74.50, 40],
        zoom: 1
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
