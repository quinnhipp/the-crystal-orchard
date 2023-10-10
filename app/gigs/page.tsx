"use client";
import Navbar from "../components/navbar";
import Link from "next/link";

const Gigs = () => {
  return (
    <Link href="/gigs">
      <Navbar activePage="Gigs" />
      Gigs
    </Link>
  );
};
export default Gigs;
