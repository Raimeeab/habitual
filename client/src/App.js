// import { ThemeProvider } from "styled-components";
// import { Container, theme } from "./components/styles/Global.styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
// import Footer from "./components/Footer";


function App() {
  return (
    // TODO: before deployment add
    //       basename="Habitual" in <Router>
    <Router>
      <Header />
     
    </Router>
  );
}

export default App;
