"use client";
import MobileNav from "../components/mobileNav";
import Navbar from "../components/navbar";
import Link from "next/link";

const Gallery = () => {
  return (
    <div>
      <div className="h-auto md:h-screen w-screen flex flex-col items-center justify-between z-0">
        {/* <Link href="/gallery"> */}
        <div>
          <Navbar activePage="Gallery" />
          Gallery
        </div>
        {/* </Link> */}
      </div>
      <MobileNav activePage="Gallery" />
    </div>
  );
};
export default Gallery;
