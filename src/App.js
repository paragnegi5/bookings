import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import BookSlot from "./pages/BookSlot";
import CancelSlot from "./pages/CancelSlot";
import SearchAppBar from "./components/Appbar";
import Pagenotfound from "./pages/404";

function App() {
  let loggedin = JSON.parse(localStorage.getItem("loggedin"));
  const [isloggedin, setIsloggedin] = useState(loggedin["isloggedin"]);
  console.log(loggedin.isloggedin);
  return (
    <div className="App">
      <Router>
        <SearchAppBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route
            path="/signup"
            element={<SignUp setIsloggedin={setIsloggedin} />}
          />
          <Route
            path="/signin"
            element={<SignIn setIsloggedin={setIsloggedin} />}
          />
          <Route
            path="/homepage"
            element={isloggedin ? <HomePage /> : <Pagenotfound />}
          />
          <Route
            path="/bookslot"
            element={isloggedin ? <BookSlot /> : <Pagenotfound />}
          />
          <Route
            path="/cancelslot"
            element={isloggedin ? <CancelSlot /> : <Pagenotfound />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
