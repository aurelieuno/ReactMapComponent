import React from 'react';
import PropTypes from 'prop-types';

export default class InfoWindow extends React.Component {
  componentDidUpdate() {
    // console.log('this.props infoWindow', this.props) //relies on gitclone
    if (this.props.marker === null) {
      this.closeInfoWindow();
    } else if (this.props.map && Object.keys(this.props.marker).length > 0) {
      this.openInfoWindow();
    }
  }

  closeInfoWindow() {
    return this.infowindow.close();
  }

  openInfoWindow() {
    const {
      map, marker, content,
    } = this.props;

    const InfoWindowConfig = {
      content,
    };

    this.infowindow = new google.maps.InfoWindow(InfoWindowConfig);

    if (marker) {
      return this.infowindow.open(map, marker);
    }
    return '';
  }

  render() {
    return null;
  }
}

InfoWindow.propTypes = {
  map: PropTypes.object.isRequired,
  marker: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
};

