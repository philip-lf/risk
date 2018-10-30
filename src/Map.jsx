import React, { Component } from 'react';
import './App.css';
import accessToken from './secret.js';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

class Map extends Component {
  componentDidMount() {
    mapboxgl.accessToken = accessToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/philip-lf/cjndkpizz7wrs2sob7xbv61dc',
        center: [-74.50, 40],
        zoom: 1.5
    });
  }

  render() {
    return (
      <div>
        <div id="map" />
      </div>
    );
  }
}

export default Map;
