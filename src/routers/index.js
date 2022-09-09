import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { useContext, useEffect } from "react";
import { authContext } from "../provides/auth";

import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function MyRoute() {
  const { isLogged, setIsLogged } = useContext(authContext);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [setIsLogged]);

  return (
    <AnimatePresence>
      <Routes>
        <Route
          path="/"
          element={isLogged ? <Home /> : <Navigate replace to={"/login"} />}
        />
        <Route
          path="/login"
          element={isLogged ? <Navigate replace to={"/"} /> : <Login />}
        />
        <Route
          path="/register"
          element={isLogged ? <Navigate replace to={"/"} /> : <Register />}
        />
      </Routes>
    </AnimatePresence>
  );
}
