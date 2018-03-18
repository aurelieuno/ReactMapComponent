import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class Map5Component extends Component {

  componentDidMount() {
    console.log('map5didMount')
    var mapScript = window.document.getElementById("mapScript");
    if (!mapScript) {
      this.initMap();
    } else {
      this.loadMap()
    }
  }

  componentDidUpdate() {
    console.log('map5didupdate')
    this.loadMap(); // call loadMap function to load the google map
  }

  initMap = async () => {
    var mapScript = window.document.getElementById("mapScript");
    if (!mapScript) {
      console.log('initMap')
      var result = await loadJS(`https://maps.googleapis.com/maps/api/js?key=${this.props.apiKey}`)
      this.loadMap();
    }
  }

  loadMap() {
    console.log('loadMap')
    // if (this.props && this.props.google) { // checks to make sure that props have been passed
    //   const { google } = this.props; // sets props equal to google
    //   const maps = google.maps; // sets maps to google maps props
      const map = new google.maps.Map(document.getElementById('map2'), {
        center: this.props.center,
        zoom: this.props.zoom,
      });
    }

  render() {
    return ( // in our return function you must return a div with ref='map' and style.
      <div>
        <div id="map2" style={this.props.style}>
          loading map...
      </div>
        {this.props.children}
      </div>
    )
  }
}

function loadJS(src) {
  return new Promise((resolve, reject) => {
    var script = window.document.createElement("script");
    script.id = 'mapScript';
    var head = window.document.getElementsByTagName("head")[0];
    head.appendChild(script)
    let handleResult = (state) => {
      return (evt) => {
        if (state === 'loaded') {
          resolve(src);
        } else if (state === 'error') {
          reject(evt)
        }
      }
    }
    script.addEventListener('load', handleResult('loaded'))
    script.addEventListener('error', handleResult('loaded'));
    script.src = src;
  })
}  