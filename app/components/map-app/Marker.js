import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

export default class Marker extends React.Component {

  /*See Documentation
  https://developers.google.com/maps/documentation/javascript/reference/3.exp/map#MapOptions */

  componentDidUpdate(prevProps) {
    console.log('prevProps', prevProps)
    console.log('this.props', this.props)
    if (this.props && this.props.map) {
      this.loadMarker();
    }
  }

  componentWillUnmount() {
    if (this.marker) {
      this.marker.setMap(null);
    }
  }

  loadMarker() {
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

/*     Object.keys(markerConfig).forEach(key => {
      // Allow to configure markerConfig with 'false'
      if (markerConfig[key] === undefined) {
        delete markerConfig[key];
      }
    }); */

    this.marker = new google.maps.Marker(markerConfig);
    return this.marker;
  }

  render() {
    return null;
  }
}

 