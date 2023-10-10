"use client";
import Navbar from "../components/navbar";
import Link from "next/link";

const Band = () => {
  return (
    <div>
      <div className="h-auto md:h-screen w-screen flex flex-col items-center justify-between z-0">
        <Link href="/band">
          <Navbar activePage="The Band" />
          The Band
        </Link>
      </div>
    </div>
  );
};
export default Band;
