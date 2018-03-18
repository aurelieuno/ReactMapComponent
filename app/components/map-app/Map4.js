import React, { Component } from 'react';
// import the Google Maps API Wrapper from google-maps-react
import { wrapper } from '../map-lib/GoogleAPIComponent'
// import child component
import MapContainer4 from './MapContainer4'


class Map4 extends Component {
  render() {
    return (
      <div>
        <h1> Google Maps API + React </h1>
        <MapContainer4 google={this.props.google} />
      </div>
    );
  }
}
// OTHER MOST IMPORTANT: Here we are exporting the Map4 component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default wrapper({
  apiKey: 'AIzaSyDxBUGwd5pLLXciCWvYmdi63XQ9-HdAKrs',
})(Map4)