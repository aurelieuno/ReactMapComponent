import {Component} from 'react'
import PropTypes from 'prop-types'

export default class InfoWindow extends Component {
  componentDidUpdate() {
    // console.log('this.props infoWindow', this.props) //relies on gitclone
    const {map, visible, marker} = this.props

    if (!marker) {
      return ''
    }

    if (visible) {
      return this.openInfoWindow()
    } else {
      return this.closeInfoWindow()
    }
  }

  closeInfoWindow() {
    return this.infowindow.close()
  }

  openInfoWindow() {
    const {map, marker, content} = this.props

    const InfoWindowConfig = {
      content,
    }

    this.infowindow = new google.maps.InfoWindow(InfoWindowConfig)

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
