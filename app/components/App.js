import React from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import MapContainer from "./map-comp/MapContainer";
import MapContainer2 from "./map-comp/MapContainer2";

const App = () => (
  <BrowserRouter>
    <div>
      <ul className = "nav">
        <li><NavLink activeClassName='active' to="/">MapComp</NavLink></li>   
        <li><NavLink activeClassName='active' to="/map2">MapComp2</NavLink></li>   
      </ul>

      <Switch>
        <Route exact path="/" component={MapContainer}/>
        <Route exact path="/map2" component={MapContainer2}/>
      <Route render={() => (
        <h3>404-Not Found</h3>)}/>
      </Switch>
    </div>
    </BrowserRouter>
)

module.exports = App;//common JS
//export default App;