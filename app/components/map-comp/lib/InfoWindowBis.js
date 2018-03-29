import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

export class InfoWindowBis extends React.Component {
  componentDidMount() {
    console.log('infowindowdidMount')
    this.renderInfoWindow()
  }

  componentDidUpdate(prevProps) {
    const { map} = this.props;


    if (!map) {
      return
    }

    if (map !== prevProps.map) {
      this.renderInfoWindow()
    }

    if (this.props.position !== prevProps.position) {
      this.updatePosition()
    }

    if (this.props.children !== prevProps.children) {
      this.updateContent()
    }

    if (
      this.props.visible !== prevProps.visible ||
      this.props.marker !== prevProps.marker ||
      this.props.position !== prevProps.position
    ) {
      this.props.visible ?
        this.openWindow() :
        this.closeWindow();
    }
  }

  renderInfoWindow() {
    const {map} = this.props;

    if (!map) {
      return ''
    }

    const iw = (this.infowindow = new google.maps.InfoWindow({
      content: ''
    }))

    google.maps.event
      .addListener(iw, 'closeclick', this.onClose.bind(this))
    google.maps.event
      .addListener(iw, 'domready', this.onOpen.bind(this));
  }

  onOpen() {
    if (this.props.onOpen) {
      this.props.onOpen()
    }
  }

  onClose() {
    if (this.props.onClose) {
      console.log('clooooosed')
      this.props.onClose()
    }
  }

  openWindow() {
    this.infowindow.open(this.props.map, this.props.marker)
  }

  updatePosition() {
    let pos = this.props.position

    if (!(pos instanceof google.maps.LatLng)) {
      pos = pos && new google.maps.LatLng(pos.lat, pos.lng)
    }
    this.infowindow.setPosition(pos)
  }

  updateContent() {
    console.log('update content')
    const content = this.renderChildren()

    console.log(this.infowindow.setContent)
    this.infowindow.setContent(content)
  }

  closeWindow() {
    this.infowindow.close()
  }

  renderChildren() {
    const {children} = this.props;

    return ReactDOMServer.renderToString(children)
  }

  render() {
    return null
  }
}

InfoWindowBis.propTypes = {
  children: PropTypes.element.isRequired,
  map: PropTypes.object,
  marker: PropTypes.object,
  position: PropTypes.object,
  visible: PropTypes.bool,

  // callbacks
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
}

InfoWindowBis.defaultProps = {
  visible: false,
}

export default InfoWindowBis
