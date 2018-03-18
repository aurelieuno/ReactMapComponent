import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

export default class Marker extends React.Component {

  /*See Documentation
  https://developers.google.com/maps/documentation/javascript/reference/3.exp/map#MapOptions */


  // componentDidMount() {
  //   console.log('didMount', this.props)
    
  //   const mapScript = window.document.getElementById("mapScript");
  //   if (mapScript) {
  //     console.log('mapScript')
  //     this.loadMarker();
  //   } 
  //   setTimeout(() => {
  //     this.loadMarker()
  //   }, 3000);

  // }

  componentDidUpdate() {
    console.log('update', this.props);
    if (this.props.map) {
      this.loadMarker();
    }
  }

  loadMarker() {
    console.log('LoadMarker')

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
      if (markerConfig[key] === undefined) {
        delete markerConfig[key];
      }
    });
    console.log('markerConfig',markerConfig)

    const marker = new google.maps.Marker(markerConfig);
    return marker;
  }

  render() {
    return null;
  }
}

 