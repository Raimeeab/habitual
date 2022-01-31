// import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Habits from "./components/Habits/Habits";
import Login from "./components/Login/Login";
import "./App.css"; 

function App() {
  return (
    // TODO: Before deployment add
    //       basename="Habitual" in <Router>
    <>
    <Router>
      <Switch>
        <Header />
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/habits">
          <Habits/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
