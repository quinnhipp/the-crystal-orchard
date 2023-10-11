"use client";
import Image from "next/image";
import MobileNav from "../components/mobileNav";
import Navbar from "../components/navbar";
import guitar from "../../public/guitar.jpg";
import "@fontsource/roboto";
import Link from "next/link";

const Band = () => {
  return (
    <div>
      <div className="h-auto md:h-screen w-screen flex flex-col items-center justify-between z-0">
        {/* <Link href="/band"> */}
        <div>
          <Navbar activePage="The Band" />
          <div className="flex z-10 justify-center items-center flex-col mt-3 md:mt-8 mb-10">
            <Image src={guitar} alt="" className="w-3/4 mt-8 mb-8" />
          </div>
          <div className="m-5 font-sans">
            <p className="text-5xl pl-10 mb-7 text-[#7E84F7] font-bold">
              The Band
            </p>
            <div className="md:flex gap-8 justify-between">
              <div className="mt-8 md:w-1/5">
                <p className="text-[#7E84F7] text-xl">Brendan Hipp</p>
                <p className="text-[#7E84F7] text-lg">// vocals</p>
                <p className="text-base mt-3">
                  Our metal fan of the group. Self taught vocalist of 15 years.
                </p>
              </div>
              <div className="mt-8 md:w-1/5">
                <p className="text-[#7E84F7] text-xl">
                  Marcus Mark & the Funky Bunch
                </p>
                <p className="text-[#7E84F7] text-lg">// rhythm guitar</p>
                <p className="text-base mt-3">
                  Marky Mark and the Funky Bunch was an American hip-hop group
                  formed in 1991 by Mark Wahlberg, Scott Gee, Hector the Booty
                  Inspector, DJ-T, and Ashey Ace.
                </p>
              </div>
              <div className="mt-8 md:w-1/5">
                <p className="text-[#7E84F7] text-xl">Harrison Ford</p>
                <p className="text-[#7E84F7] text-lg">// lead guitar</p>
                <p className="text-base mt-3">
                  Harrison Ford is an American actor. He has been a leading man
                  in films of several genres and is regarded as an American
                  cultural icon.
                </p>
              </div>
              <div className="mt-8 md:w-1/5">
                <p className="text-[#7E84F7] text-xl">
                  Lucas Walker - Texas Ranger
                </p>
                <p className="text-[#7E84F7] text-lg">// drums</p>
                <p className="text-base mt-3">
                  Walker, Texas Ranger is an American action crime television
                  series created by Leslie Greif and Paul Haggis.
                </p>
              </div>
              <div className="mt-8 pb-16 md:w-1/5">
                <p className="text-[#7E84F7] text-xl">Josiah the Messiah</p>
                <p className="text-[#7E84F7] text-lg">// bass</p>
                <p className="text-base mt-3">
                  Originating from the concept in Judaism, the messiah in
                  Christianity is called the Christ—from Greek khristós
                  (χριστός), translating the Hebrew word of the same meaning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileNav activePage="The Band" />
    </div>
  );
};
export default Band;
