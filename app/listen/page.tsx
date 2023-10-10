"use client";
import Navbar from "../components/navbar";
import Link from "next/link";

const Listen = () => {
  return (
    <Link href="/listen">
      <Navbar activePage="Listen" />
      Listen
    </Link>
  );
};
export default Listen;
