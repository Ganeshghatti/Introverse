import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Features from "./Features/Features";
import Team from "./Team/Team";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Features />
      <Team/>
      <Footer />
    </BrowserRouter>
  );
}
