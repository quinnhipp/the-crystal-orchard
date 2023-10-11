"use client";
import MobileNav from "../components/mobileNav";
import Navbar from "../components/navbar";
import Link from "next/link";

const Band = () => {
  return (
    <div>
      <div className="h-auto md:h-screen w-screen flex flex-col items-center justify-between z-0">
        {/* <Link href="/band"> */}
        <div>
          <Navbar activePage="The Band" />
          The Band
        </div>
        {/* </Link> */}
      </div>
      <MobileNav activePage="The Band" />
    </div>
  );
};
export default Band;
