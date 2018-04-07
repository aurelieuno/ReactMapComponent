import React, {Component} from 'react'
import Marker from './lib/Marker'
import InfoWindow from './lib/InfoWindow'
import MapComponent from './lib/MapComponent'
import {styles} from './styles.js'
import {MAP_API_KEY} from '../../config'

export default class MapExample2 extends Component {
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
        <h1> Map Example 2 </h1>
        <MapComponent
          apiKey={MAP_API_KEY}
          zoom={14}
          center={{lat: 40.7485722, lng: -74.0068633}}
          style={{
            width: '45vw',
            height: '45vh',
          }}
          styles={styles.retro}
          onClick={this.onMapClicked}
        >
          <Marker
            position={'Chelsea Market, 75 9th Ave, New York, NY 10011'}
            name={'Chelsea Market'}
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
