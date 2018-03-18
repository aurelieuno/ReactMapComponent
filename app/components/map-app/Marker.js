import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

export default class Marker extends React.Component {

  /*See Documentation
  https://developers.google.com/maps/documentation/javascript/reference/3.exp/map#MapOptions */


  componentDidMount() {
    
    const mapScript = window.document.getElementById("mapScript");
    if (mapScript) {
      this.loadMarker();
    } 
    console.log(this.props)
    setTimeout(() => {
      console.log('hello')
      this.loadMarker()
    }, 3000);

  }

  componentDidUpdate() {
    const mapScript = window.document.getElementById("mapScript");
    if (mapScript) {
      this.loadMarker();
    } 
  }

  loadMarker() {
    console.log('hellomarker')

    let {
      map, position, icon, label, draggable, title
    } = this.props;

    const markerConfig = {
      map: map,
      position: position,
      icon: icon,
      label: label,
      title: title,
      draggable: draggable
    };

    Object.keys(markerConfig).forEach(key => {
      // Allow to configure markerConfig with 'false'
      if (markerConfig[key] === null) {
        delete markerConfig[key];
      }
    });
    console.log(markerConfig)

    const marker = new google.maps.Marker(markerConfig);
    return marker;
  }

  render() {
    return null;
  }
}

 