import React, {Component} from 'react'
import Marker from './lib/Marker'
import InfoWindow from './lib/InfoWindow'
import MapComponent from './lib/MapComponent'
import {styles} from './styles.js'
import {MAP_API_KEY} from '../../config'

export default class MapExample5 extends Component {
  state = {
    showingInfoWindow: false,
    selectedPlace: {},
    activeMarker: null,
  }

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: {},
      })
    }
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })
  }

  render() {
    return (
      <div>
        <h1> Map Example 4 </h1>
        <MapComponent
          large
          apiKey={MAP_API_KEY}
          center={'200 Saint Charles Avenue, New Orleans, LA'}
          styles={styles.silver}
          onClick={this.onMapClicked}
        >
          <Marker
            position={'200 Saint Charles Avenue, New Orleans, LA'}
            name={'St Charles'}
            title={'Marker num 1'}
            label={'M1'}
            draggable
            onClick={this.onMarkerClick}
          />
          <Marker
            position={'901 Poydras Avenue, New Orleans, LA'}
            name={'Poydras bulding'}
            title={'Marker num 2'}
            label={'M2'}
            draggable
            onClick={this.onMarkerClick}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            content={`<div>
              <p>${this.state.selectedPlace.name}</p>
              </div>`}
          />
        </MapComponent>
      </div>
    )
  }
}
