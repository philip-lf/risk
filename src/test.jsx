import React, { Component } from 'react';
import './App.css';
import accessToken from './secret.js';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';


class Test extends Component {
  render() { 
    mapboxgl.accessToken = accessToken;
    var map = new mapboxgl.Map({
        container: 'root',
        style: 'mapbox://styles/mapbox/streets-v9'
    });

    return (
      <div id="map">
        <p>hello motto</p>
      </div>
    );
  }
}

export default Test;
