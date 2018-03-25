import React from 'react'
import PropTypes from 'prop-types'
import { camelize } from './Utils'

/*See Documentation
https://developers.google.com/maps/documentation/javascript/markers */

const evtNames = [
  'click',
  'dblclick',
  'dragend',
  'mousedown',
  'mouseout',
  'mouseover',
  'mouseup',
  'recenter',
];

export default class Marker extends React.Component {

  componentDidUpdate() {
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
      map, position, icon, label, title, draggable, animation
    } = this.props;

    const markerConfig = {
      map: map,
      position: position,
      icon: icon,
      label: label,
      title: title,
      draggable: draggable,
      // animation: animation, /* how to deal with animation, state of the big container, wrapper? */
    };

    

    this.marker = new google.maps.Marker(markerConfig);
    evtNames.forEach(e => {
      this.marker.addListener(e, this.handleEvent(e));
    });
    return this.marker;
  }

  handleEvent(evt) {
    return (e) => {
      const evtName = `on${camelize(evt)}`
      if (this.props[evtName]) {
        this.props[evtName](this.props, this.marker, e); //***purpose of passing this.props?* */
      }
    }
  }

  render() {
    return null;
  }
}

Marker.propTypes = {
  map: PropTypes.object,
  position: PropTypes.object.isRequired,
  icon: PropTypes.object,
  label: PropTypes.string,
  title: PropTypes.string,
  draggable: PropTypes.bool,
}

evtNames.forEach(e => Marker.propTypes[e] = PropTypes.func)

 