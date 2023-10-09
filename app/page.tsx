"use client";
import Home from "./pages/home";
import Navbar from "./components/navbar";

export default function Start() {
  const navLinks = ["Home", "The Band", "Listen", "Tour", "Gallery"];

  return (
    <main className="">
      {/* <Navbar /> */}
      <Home />
    </main>
  );
}
