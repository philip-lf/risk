import React, { Component } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';


class Test extends Component {
  render() { 
    mapboxgl.accessToken = 'pk.eyJ1IjoicGhpbGlwLWxmIiwiYSI6ImNqNmUxczZjcjAxdzUzMm11N203Mm43azkifQ.IOxzd05jEhxaKm4QkYXtmg';
    var map = new mapboxgl.Map({
        container: 'root',
        style: 'mapbox://styles/mapbox/dark-v9',
        zoom: 13
    });

    return (
      <div id="map">
        <p>hello motto</p>
      </div>
    );
  }
}

export default Test;
