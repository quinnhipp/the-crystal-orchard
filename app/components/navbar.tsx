import { usePathname } from "next/navigation";
import Link from "next/link";
import { Headset, YouTube } from "@mui/icons-material";
import Socials from "./socials";

const Navbar = () => {
  return (
    <div className="flex md:gap-x-16">
      <div className="hidden md:flex md:gap-x-16">
        <a href="/home" className="active: text-blue-400">
          <div>Home</div>
        </a>
        <a href="/band">
          <div>The Band</div>
        </a>
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
