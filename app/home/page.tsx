import { Button, TextField } from "@mui/material";
import Navbar from "../components/navbar";
import Image from "next/image";
import logo from "../../public/Crystal_Orchard_logo.png";

const Home = () => {
  return (
    <div>
      <div className="h-auto md:h-screen w-screen flex flex-col items-center justify-between z-0">
        <Navbar activePage="Home" />
        <div className="flex bg-transparent border-white md:border-8 border-t-8 border-b-8 z-10 w-full h-full justify-center items-center flex-col mt-3 md:mt-8 mb-10">
          {/* <strong className="bottom-0 text-4xl md:text-7xl">The Crystal Orchard</strong> */}
          <Image src={logo} alt="" className="" />
          <div className="border-white border-2 p-2 mb-5 text-[#7E84F7]">
            LISTEN TO OUR MUSIC
          </div>
        </div>
        <div className="flex gap-48">
          <div className="flex-col gap-3 hidden md:flex right-0">
            <span>Subscribe for Updates</span>
            <TextField
              id="enterEmail"
              placeholder="Enter your email here*"
              className="w-96"
              sx={{ input: { color: "lightgreen" } }}
            />
            <Button className="bg-[#6FF78B] text-black">Subscribe Now</Button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-3 ml-5 md:hidden">
          <span className="text-[#6FF78B]">Subscribe for Updates</span>
          <TextField
            id="enterEmail"
            placeholder="Enter your email here*"
            className="w-7/8"
            sx={{ input: { color: "white" } }}
          />
          <Button className="bg-[#6FF78B] text-black">Subscribe Now</Button>
        </div>
      </div>
    </div>
  );
};
export default Home;
