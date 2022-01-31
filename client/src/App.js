// import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/habits" element={<Habits />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
