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

  // componentWillUnmount() {
  //   var head = window.document.getElementsByTagName("head")[0];
  //   var script = window.document.getElementById("hello");
  //   head.removeChild(script);
  //   console.log(head)
  // }
  
  initMap = async () => {
    var hello = window.document.getElementById("hello");
    if (!hello) {
      console.log('hello')
      var result = await loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDxBUGwd5pLLXciCWvYmdi63XQ9-HdAKrs')
    }

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

//  function loadJS(src) {
//   return new Promise((resolve, reject) => {
//     var ref = window.document.getElementsByTagName("script")[0];
//     console.log('refbefore', ref.parentNode)
//     var script = window.document.createElement("script");
//     script.id='hello'
//     script.async = true;
//     ref.parentNode.insertBefore(script, ref);
//     let handleResult = (state) => {
//       return (evt) => {
//         if (state === 'loaded') {
//           resolve(src);
//         } else if (state === 'error') {
//           reject(evt)
//         }
//       }
//     }
//     script.addEventListener('load', handleResult('loaded'))
//     script.addEventListener('error', handleResult('loaded'));
//     script.src = src;
//     var head = window.document.getElementsByTagName("head")[0];
//     console.log(head)
//     // script.parentNode.removeChild(script);
//     console.log('refafter', ref.parentNode)
//   })
// }  
function loadJS(src) {
    return new Promise((resolve, reject) => {
      var script = window.document.createElement("script");
      // script.async = true;
      script.id = 'hello';
      var head = window.document.getElementsByTagName("head")[0];
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
      console.log(head)
    })


}  
/* First, you need to worry about caching.Typically, the url you're going to be loading is going to be some kind of CGI program. 
After all, if the output doesn't vary, why bother loading it more than once ? Usually browsers are fairly smart about not caching 
those, but you might want to take some steps to ensure that the second call doesn't just get you the cached copy of the result of 
the first call.So the CGI should probably be outputting headers to suppress caching.You might also put extra arguments on the URL,
  perhaps by keeping a count of the number of times you've called it, and adding a "?count=7" argument onto the end of the URL
    (where 7 is the current count).This makes the URL different on each call, and further ensures that you won't get a cached copy.

Second, you'll tend to accumulate a lot of <script> tags in your header. This doesn't necessarily do a whole lot of harm,
  but it seems sloppy.So you could probably delete them by doing body.removeChild(script).I think you can actually have the
callback function do this immediately after loading.Removing the < script > tag does not undefine functions or variables
that were defined by it, so you are done with it the moment it is done loading. */