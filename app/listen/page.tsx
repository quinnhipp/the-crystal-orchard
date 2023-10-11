"use client";
import MobileNav from "../components/mobileNav";
import Navbar from "../components/navbar";
import Link from "next/link";

const Listen = () => {
  return (
    <div>
      <div className="h-auto md:h-screen w-screen flex flex-col items-center justify-between z-0">
        {/* <Link href="/listen"> */}
        <div>
          <Navbar activePage="Listen" />
          Listen
        </div>
        {/* </Link> */}
      </div>
      <MobileNav activePage="Listen" />
    </div>
  );
};
export default Listen;
