import { usePathname } from "next/navigation";
import Link from "next/link";
import { Headset, YouTube } from "@mui/icons-material";
import Socials from "./socials";

// const navElements = [
//   { title: "Home", href: "" },
//   { title: "The Band", href: "band" },
//   { title: "Listen", href: "listen" },
//   { title: "Gig Dates", href: "gigs" },
//   { title: "Gallery", href: "gallery" },
// ];

const Navbar = () => {
  return (
    <div className="flex md:gap-x-16">
      <div className="hidden md:flex md:gap-x-16 mt-8">
        <a href="/" className="active: text-blue-400">
          <div>Home</div>
        </a>
        <Link href="/band">
          <div>The Band</div>
        </Link>
        <a href="listen">
          <div>Listen</div>
        </a>
        <a href="tour">
          <div>Tour Dates</div>
        </a>
        <a href="gallery">
          <div>Gallery</div>
        </a>
      </div>
      <Socials />
    </div>
  );
};
export default Navbar;
