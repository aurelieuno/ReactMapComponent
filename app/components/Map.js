import React from "react";
import axios from "axios";

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
    componentDidMount() {
        this.initMap();
    }

    initMap = () => {
        console.log("hello", google.maps.Map)
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
        });
    }


    render() {
        var head = window.document.getElementsByTagName("head")[0];
        console.log(head)
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

module.exports = Map;

