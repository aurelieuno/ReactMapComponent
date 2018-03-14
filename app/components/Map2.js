import React from "react";
import axios from "axios";

class Map2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.initMap();

    // window.initMap = this.initMap;
    // loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDxBUGwd5pLLXciCWvYmdi63XQ9-HdAKrs&callback=initMap');
  }
  
  initMap = async () => {
    var result = await loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDxBUGwd5pLLXciCWvYmdi63XQ9-HdAKrs')
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  render() {
    const styleMap = {
      height: '400px',
      width: '400px',
    }
    return (
      <div id='map' style={styleMap}>
      </div>
    );
  }
}

module.exports = Map2;

function loadJS(src) {
  return new Promise((resolve, reject) => {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}    
