"use client";
import Footer from "../components/footer";
import StandardImageList from "../components/imageList";
import MobileNav from "../components/mobileNav";
import Navbar from "../components/navbar";
import Link from "next/link";

const Gallery = () => {
  return (
    <div>
      <title>Crystal Orchard - Gallery</title>
      <div className="h-auto md:h-screen w-screen md:w-[99vw] overflow-x-hidden flex flex-col items-center justify-between z-0">
        <div>
          <Navbar activePage="Gallery" />
          <div className="m-5 font-sans">
            <p className="text-5xl pl-10 mt-16 mb-7 text-[#7E84F7] font-bold">
              Gallery
            </p>
            <StandardImageList />
          </div>
        </div>
        <Footer />
      </div>
      <MobileNav activePage="Gallery" />
    </div>
  );
};
export default Gallery;
