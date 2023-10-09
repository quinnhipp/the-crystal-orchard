import { Headset, YouTube, Apple, Facebook } from "@mui/icons-material";

const Socials = () => {
  return (
    <div className="flex gap-x-3 mt-3 md:mt-8">
      <Headset />
      <a href="https://youtube.com/markiplier" target="_blank">
        <YouTube />
      </a>
      <a href="https://apple.com/apple-music/" target="_blank">
        <Apple />
      </a>
      <a href="https://facebook.com" target="_blank">
        <Facebook />
      </a>
    </div>
  );
};
export default Socials;
