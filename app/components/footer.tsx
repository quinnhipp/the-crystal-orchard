import { Button, TextField } from "@mui/material";

const Footer = () => {
  return (
    <div className="w-screen">
      {/* Desktop Footer */}
      <div className="w-4/5 hidden md:flex mx-auto justify-around mb-10">
        <div className="flex-col flex gap-3">
          <span className="text-[#7E84F7]">Subscribe for Updates</span>
          <TextField
            id="enterEmail"
            placeholder="Enter your email here*"
            sx={{ input: { color: "lightgreen" } }}
          />
          <Button className="bg-[#6FF78B] text-black w-72">
            Subscribe Now
          </Button>
        </div>
        <div className="flex gap-48">
          <div className="flex-col gap-3 flex">
            <span className="text-[#7E84F7]">Contact Us</span>
            <p>Email: brendanhipp1223@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex mt-24 pb-5 text-sm justify-center font-bold bg-gradient-to-tr from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent animate-gradient-xy">
        <a href="https://www.qhipp.dev/" target="_blank">
          POWERED BY: QUINN HIPP
        </a>
      </div>
      {/* Mobile Footer */}
      <div className="md:hidden w-5/6 mb-16 mx-auto">
        <div className="flex flex-col gap-3 md:hidden mb-10">
          <span className="text-[#7E84F7]">Subscribe for Updates</span>
          <TextField
            id="enterEmail"
            placeholder="Enter your email here*"
            sx={{ input: { color: "white" } }}
          />
          <Button className="bg-[#6FF78B] text-black">Subscribe Now</Button>
        </div>
        <div className="flex flex-col gap-3 md:hidden">
          <span className="text-[#7E84F7]">Contact Us</span>
          <p>Email: brendanhipp1223@gmail.com</p>
        </div>
        <div className="mt-24 text-sm justify-center flex font-bold bg-gradient-to-tr from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent animate-gradient-xy">
          <a href="https://www.qhipp.dev/" target="_blank">
            POWERED BY: QUINN HIPP
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
