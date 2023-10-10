"use client";
import Navbar from "../components/navbar";
import Link from "next/link";

const Gallery = () => {
  return (
    <Link href="/gallery">
      <Navbar activePage="Gallery" />
      Gallery
    </Link>
  );
};
export default Gallery;
