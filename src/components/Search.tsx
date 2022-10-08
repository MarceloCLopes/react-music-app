import d1Img from "../assets/d1.png";
import d2Img from "../assets/d2.png";
import d3Img from "../assets/d3.png";
import d4Img from "../assets/d4.png";
import { MusicPlayer } from "./MusicPlayer";
import searchImg from "../assets/search.png";
import path318Img from "../assets/path318.png";
import backGraphicsImg from "../assets/backGraphics.png";
import { useState } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

export function Search() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };
  const redimg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const musicimg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };

  return (
    <div className="search relative w-full h-[65rem] bg-[#081730] px-20 pt-72 pb-40 -mt-60 z-[1] flex flex-1 gap-2 flex-row items-center justify-between rounded-b-[5rem]">
      {/** left side */}
      <div className="left flex-1 ">
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={backGraphicsImg}
          alt=""
          className="absolute top-[22rem] w-[65%] -left-[47rem]"
        />
        <motion.img
          src={d1Img}
          alt=""
          className="absolute w-64 top-[26rem] left-16"
        />
        <motion.img
          src={d2Img}
          alt=""
          className="absolute w-36 top-[32.7rem] left-28"
        />
        <motion.img
          variants={redimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          src={d3Img}
          alt=""
          className="absolute w-36 top-[33rem] left-[17rem]"
        />
        <motion.img
          variants={musicimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={d4Img}
          alt=""
          className="absolute w-[17rem] top-[50rem] left-8"
        />
      </div>

      {/** right side */}
      <div className="right flex items-start flex-col justify-start flex-1 pt-36 w-1/2 h-full">
        {/** search */}
        <div className="searchbar flex justify-start w-full items-center ">
          <input
            type="text"
            placeholder="Enter yhe keyword or URL"
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-12"
          />

          <div className="searchIcon flex items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 cursor-pointer">
            <img src={searchImg} alt="" className="w-6" />
          </div>
        </div>

        {/** tild icon */}
        <div className="tild flex justify-start mt-7 items-center w-full">
          <img src={path318Img} alt="" className="w-20" />
        </div>

        {/** paragraph */}
        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Duis feugiat congue metus, ultrices vulputate <br />
            nibh viverra eget. Vestibulum ullamcorper <br /> volitpat varius.
          </span>
        </div>

        {/** Music Player */}
        <VisibilitySensor
          onChange={(isVisible: any) => setElementIsVisible(isVisible)}>
          <MusicPlayer />
        </VisibilitySensor>
      </div>
    </div>
  );
}
