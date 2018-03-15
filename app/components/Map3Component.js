import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class Map3Component extends Component {

  componentDidUpdate(prevProps) {
    console.log('prevProp', prevProps);
    console.log('container', this.props);
    console.log()
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    // this.loadMap(); // call loadMap function to load the google map
  }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const { google } = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = Object.assign({}, {
        center: { lat: 40.7485722, lng: -74.0068633 }, // sets center of google map to NYC.
        zoom: 11, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })

      // this.mapNew = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

      const map = new google.maps.Map(document.getElementById('map2'), {
        center: this.props.center,
        zoom: this.props.zoom,
      });

    }
  }

  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '90vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    return ( // in our return function you must return a div with ref='map' and style.
    <div>  
      <div ref="map" id="map2" style={style}>
        loading map...
      </div>
        {this.props.children}
    </div>
    )
  }
}