import React, { Component } from 'react';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react'
// import child component
import MapContainer from './MapContainer'


class Map3 extends Component {
  render() {
    return (
      <div>
        <h1> Google Maps API + React </h1> 
        <MapContainer google={this.props.google} />
      </div>
    );
  }
}
// OTHER MOST IMPORTANT: Here we are exporting the Map3 component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDxBUGwd5pLLXciCWvYmdi63XQ9-HdAKrs',
})(Map3)