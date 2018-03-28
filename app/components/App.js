import React from 'react'
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'

import MapExample1 from './map-comp/MapExample1'
import MapExample2 from './map-comp/MapExample2'
import MapExample3 from './map-comp/MapExample3'

const App = () => (
  <BrowserRouter>
    <div>
      <ul className="nav">
        <li>
          <NavLink activeClassName="active" to="/">
            MapExample1
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/map2">
            MapExample2
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/map3">
            MapExample3
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={MapExample1} />
        <Route exact path="/map2" component={MapExample2} />
        <Route exact path="/map3" component={MapExample3} />
        <Route render={() => <h3>404-Not Found</h3>} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
