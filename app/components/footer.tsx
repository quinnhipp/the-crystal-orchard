import { Button, TextField } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="flex gap-48">
          <div className="flex-col gap-3 hidden md:flex right-0">
            <span className="text-[#7E84F7]">Subscribe for Updates</span>
            <TextField
              id="enterEmail"
              placeholder="Enter your email here*"
              className="w-96"
              sx={{ input: { color: "lightgreen" } }}
            />
            <Button className="bg-[#6FF78B] text-black">Subscribe Now</Button>
          </div>
        </div>
        <div className="mb-20 border-t-8 pt-3 w-screen">
          <div className="flex flex-col gap-3 ml-5 md:hidden">
            <span className="text-[#7E84F7]">Subscribe for Updates</span>
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
      <div>
        <div className="flex gap-48">
          <div className="flex-col gap-3 hidden md:flex right-0">
            <span className="text-[#7E84F7]">Contact Us</span>
            <p>Email: blah blah blah</p>
          </div>
        </div>
        <div className="mb-20 pt-3 w-screen">
          <div className="flex flex-col gap-3 ml-5 md:hidden">
            <span className="text-[#7E84F7]">Contact Us</span>
            <p>Email: blah blah blah</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
