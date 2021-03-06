import React, {Component} from 'react'
import Marker from './lib/Marker'
import InfoWindow from './lib/InfoWindow'
import MapComponent from './lib/MapComponent'
import {MAP_API_KEY} from '../../config'

export default class MapExample1 extends Component {
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
        <h1> Map Example 1 </h1>
        <MapComponent
          apiKey={MAP_API_KEY}
          zoom={12}
          center={'City Park, New Orleans, LA'}
          onClick={this.onMapClicked}
        >
          <Marker
            position={'4200 Canal Street, New Orleans, LA'}
            name={'RevelryLab'}
            icon={{url: './app/components/map-comp/assets/RevMarker.png'}}
            onClick={this.onMarkerClick}
          />
          <Marker
            position={'City Park, New Orleans, LA'}
            name={'City Park'}
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
