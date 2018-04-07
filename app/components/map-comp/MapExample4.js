import React, {Component} from 'react'
import GMap from './lib/GMap.js'

export default class MapExample4 extends Component {
  render() {
    return (
      <div>
        <h1> Map Example 4 </h1>
        <GMap />
        <GMap />
      </div>
    )
  }
}
