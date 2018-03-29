import {Component} from 'react'
import PropTypes from 'prop-types'

export default class InfoWindow extends Component {
  componentDidUpdate(prevProps) {
    const {visible, marker, map} = this.props

    if (!map) {
      return ''
    }

    if (map !== prevProps.map) {
        console.log('hello')
        this.renderInfoWindow()
      }

    // if (prevProps.marker && prevProps.marker.label != this.props.marker.label) {
    //   console.log(prevProps.marker.label == this.props.marker.label);
    //   this.closeInfoWindow();
    //   this.openInfoWindow();
    // }

    if (!visible) {
      return this.closeInfoWindow()
    } else {
      return this.openInfoWindow()
    }
  }

  closeInfoWindow() {
    return this.infowindow.close()
  }

  renderInfoWindow() {
    const {map, marker, content} = this.props

    const InfoWindowConfig = {
      content 
    }

    this.infowindow = new google.maps.InfoWindow(InfoWindowConfig)
    console.log(this.infowindow)
  }

  openInfoWindow() {
    const {map, marker, content} = this.props

    const InfoWindowConfig = {
      content,
    }

    // this.infowindow = new google.maps.InfoWindow(InfoWindowConfig)

    if (marker) {
      return this.infowindow.open(map, marker)
    }
    return ''
  }

  render() {
    return null
  }
}

InfoWindow.propTypes = {
  map: PropTypes.object,
  marker: PropTypes.object,
  visible: PropTypes.bool,
  content: PropTypes.string.isRequired,
}
