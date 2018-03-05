import React from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';


/*var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
*/
import Home from "./Home";
import Battle from "./Battle";
import Popular from "./Popular";
import Topics from "./Topics";
import ModalExample from "./ModalLess";
import Form2 from "./Form2";
import BuiltModal from "./BuiltModal";
import NoStateDrawer from "./NoStateDrawer";
import StateModal from "./StateModal";
import Results from "./Results1";
import MongoResults from "./MongoResults";

const App = () => (
  <BrowserRouter>
    <div>
      <ul className = "nav">
        <li><NavLink exact activeClassName='active' to="/">Home</NavLink></li>
        <li><NavLink activeClassName='active' to="/battle">Battle</NavLink></li>
        <li><NavLink activeClassName='active' to="/popular">Popular</NavLink></li>
        <li><NavLink activeClassName='active' to="/topics">Topics</NavLink></li>
        <li><NavLink activeClassName='active' to="/form">ModalLess</NavLink></li>
        <li><NavLink activeClassName='active' to="/form2">Form2</NavLink></li>
        <li><NavLink activeClassName='active' to="/builtmodal">BuiltModal</NavLink></li>
        <li><NavLink activeClassName='active' to="/form4">NoStateDrawer</NavLink></li>
        <li><NavLink activeClassName='active' to="/form5">StateModal</NavLink></li>
        <li><NavLink activeClassName='active' to="/mongoresults">MongoResults</NavLink></li>

      </ul>

      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/battle" component={Battle}/>
      <Route exact path="/popular" component={Popular}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/form" component={ModalExample}/>
      <Route path="/form2" component={Form2}/>
      <Route path="/builtmodal" component={BuiltModal}/>
      <Route path="/form4" component={NoStateDrawer}/>
      <Route path="/form5" component={StateModal}/>
      <Route path="/battle/results" component={Results}/>
      <Route path="/mongoresults" component={MongoResults}/>
      <Route render={() => (
        <h3>404-Not Found</h3>)}/>
      </Switch>
    </div>
    </BrowserRouter>
)

module.exports = App;//common JS
//export default App;