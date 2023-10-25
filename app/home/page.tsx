"use client";
import { Button, TextField } from "@mui/material";
import Navbar from "../components/navbar";
import Image from "next/image";
import logo from "../../public/Crystal_Orchard_logo.png";
import MobileNav from "../components/mobileNav";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="md:w-[98vw] overflow-x-hidden">
      <title>Crystal Orchard - Home</title>
      <div className="h-auto md:h-screen w-screen flex flex-col items-center justify-between z-0">
        <Navbar activePage="Home" />
        <div className="flex bg-transparent border-white md:border-8 border-t-8 border-b-8 z-10 w-full md:w-3/5 h-full justify-center items-center flex-col mt-3 md:mt-8 mb-10">
          <Image src={logo} alt="" className="" />
          <div className="border-white border-2 p-2 mb-5 bg-gradient-to-tr from-[#7E84F7] to-[#6FF78B] bg-clip-text text-transparent">
            LISTEN TO OUR MUSIC
          </div>
        </div>
        <Footer />
      </div>
      <MobileNav activePage="Home" />
    </div>
  );
};
export default Home;
