import React, { Component } from 'react';
import Marker from './Marker'
import MapComponent from './MapComponent'
import Lipsum from '../awesome-possum/lib/Lipsum'


export default class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    selectedPlace: {},
    activeMarker: {},
  }

  onMapClicked = (props, map, e) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  onMarkerClick = (props, marker, e) => {
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
 }


  render() {
    return (
      <div>
        <h1> Google Maps API + React </h1>
        <MapComponent
          apiKey={'AIzaSyDxBUGwd5pLLXciCWvYmdi63XQ9-HdAKrs'}
          zoom={12}
          center={{ lat: 40.7485722, lng: -74.0068633 }}
          style={{ // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
             width: '75vw', // 90vw basically means take up 90% of the width screen. px also works.
             height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
          }}
          onClick={this.onMapClicked}
        >
          <Marker
            position={{ lat: 40.7143033, lng: -74.0036919 }}
            name={'Museum'}
            icon= {{'url': "./app/components/map-app/lou.PNG"}}
            onClick={this.onMarkerClick}
            />
          <Lipsum />
          </MapComponent>
          <Lipsum />
      </div>
    );
  }
}



