import React, { Component } from 'react'
import Marker from './lib/Marker'
import InfoWindow from './lib/InfoWindow'
import MapComponent from './lib/MapComponent'
import {MAP_API_KEY} from '../../config'

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
        <h1> Google Maps Component </h1>
        <MapComponent
          apiKey={MAP_API_KEY}
          zoom={12}
          // center={{ lat: 29.9798107, lng: -90.0793491 }}
          center={'2823 Ursulines Avenue, New Orleans, LA'}
          style={{ 
             width: '75vw', // 90vw basically means take up 90% of the width screen. px also works.
             height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
          }}
          onClick={this.onMapClicked}
        >
          <Marker
            position={'2825 Ursulines Avenue, New Orleans, LA'}
            name={'City Park'}
            onClick={this.onMarkerClick}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            content={
              `<div>
              <p>${this.state.selectedPlace.name}</p>
              </div>`
            }/>
          </MapComponent>
      </div>
    );
  }
}



