import React from "react";
import {Header} from "./Header"
import {Home} from "./Home"
import {Info} from "./Info"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

export const App = (props) => {
  return (<Router>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      {/* <Route exact path="/:anime" component={Info}/> */}
      <Route exact path="/:genre" component={Info}/>
    </Switch>
  </Router>);
};