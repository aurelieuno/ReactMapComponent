import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { camelize } from '../map-lib/lib/String';

const evtNames = [
  'bounds_changed',
  'center_changed',
  'click',
  'dblclick',
  'drag',
  'dragend',
  'dragstart',
  'heading_changed',
  'idle',
  'maptypeid_changed',
  'mousemove',
  'mouseout',
  'mouseover',
  'projection_changed',
  'resize',
  'rightclick',
  'tilesloaded',
  'tilt_changed',
  'zoom_changed'
];

export default class MapComponent extends React.Component {

/*See Documentation
https://developers.google.com/maps/documentation/javascript/reference/3.exp/map#MapOptions */

  static propTypes = {
    apiKey: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    center: PropTypes.object.isRequired,
    clickableIcons: PropTypes.bool,
    disableDefaultUI: PropTypes.bool,
    disableDoubleClickZoom: PropTypes.bool,
    draggable: PropTypes.bool,
    draggableCursor: PropTypes.string,
    draggingCursor: PropTypes.string,
    fullscreenControl: PropTypes.bool,
    gestureHandling: PropTypes.string,
    heading: PropTypes.number,
    keyboardShortcuts: PropTypes.bool,
    mapTypeControl: PropTypes.bool,
    mapTypeId: PropTypes.string,
    maxZoom: PropTypes.number,
    minZoom: PropTypes.number,
    noClear: PropTypes.bool,
    panControl: PropTypes.bool,
    rotateControl: PropTypes.bool,
    scaleControl: PropTypes.bool,
    scrollwheel: PropTypes.bool,
    streetViewControl: PropTypes.bool,
    style: PropTypes.object.isRequired,
    styles: PropTypes.array,
    tilt: PropTypes.number,
    zoom: PropTypes.number,
    zoomControl: PropTypes.bool,
    
    centerAroundCurrentLocation: PropTypes.bool,
    initialCenter: PropTypes.object,
    className: PropTypes.string,
    visible: PropTypes.bool,
  };

  componentDidMount() {
    const mapScript = window.document.getElementById("mapScript");
    if (!mapScript) {
      this.initMap();
    } else {
      this.loadMap()
    }
  }

  componentDidUpdate() {
  }

  initMap = async () => {
    await loadJS(`https://maps.googleapis.com/maps/api/js?key=${this.props.apiKey}`)
    this.loadMap();
  }

  loadMap() {
    const mapConfig = {
      apiKey: this.props.apiKey,
      backgroundColor: this.props.backgroundColor,
      center: this.props.center,
      clickableIcons: !!this.props.clickableIcons,
      disableDefaultUI: this.props.disableDefaultUI,
      disableDoubleClickZoom: this.props.disableDoubleClickZoom,
      draggable: this.props.draggable,
      draggableCursor: this.props.draggableCursor,
      draggingCursor: this.props.draggingCursor,
      fullscreenControl: this.props.fullscreenControl,
      gestureHandling: this.props.gestureHandling,
      heading: this.props.heading,
      keyboardShortcuts: this.props.keyboardShortcuts,
      mapTypeControl: this.props.mapTypeControl,
      mapTypeId: this.props.mapTypeId,
      maxZoom: this.props.maxZoom,
      minZoom: this.props.minZoom,
      noClear: this.props.noClear,
      panControl: this.props.panControl,
      rotateControl: this.props.rotateControl,
      scaleControl: this.props.scaleControl,
      scrollwheel: this.props.scrollwheel,
      streetViewControl: this.props.streetViewControl,
      style: this.props.style,
      styles: this.props.styles,
      tilt: this.props.tilt,
      zoom: this.props.zoom,
      zoomControl: this.props.zoomControl,

      centerAroundCurrentLocation: this.props.centerAroundCurrentLocation,
      initialCenter: this.props.initialCenter,
      className: this.props.className,
      containerStyle: this.props.containerStyle,
      visible: this.props.visible,
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapConfig);
    this.listeners = {};
    evtNames.forEach(e => {
      this.listeners[e] = this.map.addListener(e, this.handleEvent(e));
    });

/*  https://reactjs.org/docs/react-component.html#forceupdate
    https://reactjs.org/docs/react-component.html#shouldcomponentupdate */
    this.forceUpdate();

  }

  handleEvent(evt) {
    return (e) => {
      const evtName = `on${camelize(evt)}`
      if (this.props[evtName]) {
        this.props[evtName](this.props, this.map, e);
      }
    }
  }

  renderChildren = () => {
    const { children } = this.props;

    if (!children) return;

      return React.Children.map(children, c => {
        if (!c) return;
        return React.cloneElement(c, {
          map: this.map,
          // google: this.props.google,
          // mapCenter: this.state.currentLocation
        });
      });
  }

  render() {
    return ( // in our return function you must return a div with ref='map' and style.
      <div>
        <div id="map" ref="map" style={this.props.style}>
          loading map...
      </div>
        {this.renderChildren()}

      </div>
    )
  }
}

function loadJS(src) {
  return new Promise((resolve, reject) => {
    const script = window.document.createElement("script");
    script.id = 'mapScript';
    const head = window.document.getElementsByTagName("head")[0];
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