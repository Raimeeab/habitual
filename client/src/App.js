// import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/pages/Home";
import Habits from "./components/pages/Habits";
// import SideBar from "./components/SideBar";
// import Footer from "./components/Footer";

function App() {
  return (
    // TODO: before deployment add
    //       basename="Habitual" in <Router>
    <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/habits" element={<Habits/>} />
      </Routes>
    </Router>
  );
}

export default App;
