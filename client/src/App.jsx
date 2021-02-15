import {
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Container from "./Container";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import MyMatchesAll from "./components/MyMatchesAll";
import MyMatchSingle from "./components/MyMatchSingle";
import React from "react";
import Nav from "./components/Nav";

function App() {
  return (
    <Container>
     
      <BrowserRouter>
      <Nav/> 
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/mymatchesall" component={MyMatchesAll} />
          <Route exact path="/mymatch/:id" component={MyMatchSingle} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
