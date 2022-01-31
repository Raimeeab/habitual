import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Holds global styles 
import "./App.css";

// App components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Habits from "./components/Habits/Habits";
import Login from "./components/Login/Login";
import AccountBox from "./components/AccountBox";

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
          <Route path="/account" element={<AccountBox/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
