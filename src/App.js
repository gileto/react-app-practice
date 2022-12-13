import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
 return (
  <BrowserRouter>
   <div className="wrapper">
    <Header />
    <Navbar />
    <Routes>
     <Route path="/profile" element={<Profile />} />
     <Route path="/dialogs" element={<Dialogs />} />
    </Routes>
   </div>
  </BrowserRouter>
 );
};

export default App;
