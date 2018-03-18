import React, { Component } from 'react';
// import the Google Maps API Wrapper from google-maps-react
// import child component
import Marker from './Marker'
import Map5Component from './Map5Component'
import MapComponent from './MapComponent'
import Lipsum from '../awesome-possum/lib/Lipsum'


export default class Map5 extends Component {
  render() {
    return (
      <div>
        <h1> Google Maps API + React </h1>
        <MapComponent
          apiKey={'AIzaSyDxBUGwd5pLLXciCWvYmdi63XQ9-HdAKrs'}
          zoom={12}
          center={{ lat: 40.7485722, lng: -74.0068633 }}
          style={{ // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
             width: '90vw', // 90vw basically means take up 90% of the width screen. px also works.
             height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
          }}
        >
          <Marker
            position={{ lat: 40.7143033, lng: -74.0036919 }} />
          <Lipsum />
        </MapComponent>
      </div>
    );
  }
}



