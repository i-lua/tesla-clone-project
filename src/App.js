import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu.js";
import HeaderBlock from "./HeaderBlock.js";
import Login from "./Login.js";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice.js";
import Signup from "./Signup.js";
import TeslaAccount from "./TeslaAccount.js";
import { auth } from "./firebase.js";

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                {isMenuOpen && <Menu />}
                <HeaderBlock />
              </>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/teslaaccount" /> : <Login />}
          ></Route>
          <Route exact path="/signup" element={<Signup />} />
          <Route
            exact
            path="/teslaaccount"
            element={
              !user ? (
                <Navigate to="/login" />
              ) : (
                <>
                  <TeslaAccount
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  />{" "}
                  {isMenuOpen && <Menu />}
                </>
              )
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
