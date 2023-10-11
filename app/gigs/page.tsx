"use client";
import MobileNav from "../components/mobileNav";
import Navbar from "../components/navbar";
import Link from "next/link";

const Gigs = () => {
  return (
    <div>
      <div className="h-auto md:h-screen w-screen flex flex-col items-center justify-between z-0">
        {/* <Link href="/gigs"> */}
        <div>
          <Navbar activePage="Gigs" />
          Gigs
        </div>
        {/* </Link> */}
      </div>
      <MobileNav activePage="Gigs" />
    </div>
  );
};
export default Gigs;
