import React, {Component} from 'react'
import Marker from './lib/Marker'
import InfoWindow2 from './lib/InfoWindow2'
import MapComponent from './lib/MapComponent'
import {MAP_API_KEY} from '../../config'

export default class MapExample4 extends Component {
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
          apiKey={MAP_API_KEY}
          zoom={12}
          center={'200 Saint Charles Avenue, New Orleans, LA'}
          mapTypeId={'hybrid'}
          style={{
            width: '75vw', // 90vw basically means take up 90% of the width screen. px also works.
            height: '75vh', // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
          }}
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
            position={'City Park, New Orleans, LA'}
            name={'City Park'}
            title={'Marker num 2'}
            label={'M2'}
            draggable
            onClick={this.onMarkerClick}
          />
          <InfoWindow2
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
