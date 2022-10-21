import React from "react";
import { BrowserRouter,Route,  Routes } from "react-router-dom";
//import Loginn from "./Loginn";
//import Home from "./Home";
//import Salesdb from "./Salesdb";
//import Loginn from "./Loginn";
//import LoginO from "./LoginO";
import Tasklist from "./Tasklist";

 
export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<Loginn />}>
            </Route> */}
            {/* <Route path="/" element={<LoginO />}>
            </Route> */}
            {/* <Route path="/Salesdb" element={<Salesdb />}>
            </Route> */}
            <Route path="/" element={<Tasklist />}>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
