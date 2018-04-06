import React, {Component} from 'react'
import Marker from './lib/Marker'
import InfoWindow from './lib/InfoWindow'
import MapComponent from './lib/MapComponent'
import MapComponent2 from './lib/MapComponent2'
import GMap from './lib/GMap.js'
import {render} from 'react-dom'

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
    const basicSettings = {
      initialCenter: {
        lat: 29.975588,
        lng: -90.102682,
      },
      initialZoom: 12,
    }
    return (
      <div>
        <h1> Map Example 5 </h1>
        <GMap />
        <GMap />
      </div>
    )
  }
}
