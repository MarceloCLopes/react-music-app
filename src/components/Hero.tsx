import { DownloadAds } from "./DownloadAds";
import backGraphicsImg from "../assets/backGraphics.png";
import p1Img from "../assets/p1.png";
import p2Img from "../assets/p2.png";
import p3Img from "../assets/p3.png";
import p4Img from "../assets/p4.png";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

export function Hero() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };
  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };
  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  };
  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };

  return (
    <VisibilitySensor
      onChange={(isVisible: any) => setElementIsVisible(isVisible)}
      minTopValue={300}>
      <div className="wrapper bg-[#081730] flex items-center justify-between px-20 rounded-b-[5rem] w-full h-[45rem] mb-20 pb-28">
        {/** Left side */}
        <div className="headings flex flex-col items-start justify-center h-full text-5xl">
          <span>Experience The </span>
          <span>
            <b>Best Quality Music</b>
          </span>
          <span className="text-[15px] text-[#525D6E]">
            Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
            <br />
            Suspendisse in leo nin risus tincindut lobortis.
          </span>

          {/** download ads */}
          <div>
            <span className="text-[13px]">Download now on IOS and Android</span>
            <DownloadAds />
          </div>
        </div>

        {/** Right side */}
        <div className="images relative w-1/2 ">
          <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={backGraphicsImg}
            alt=""
            className="absolute -top-32 left-[19rem]"
          />
          <img
            src={p1Img}
            alt=""
            className="absolute -top-60 left-52 h-[34rem]"
          />
          <motion.img
            variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={p2Img}
            alt=""
            className="absolute top-[94px] left-[235px] w-[175px]"
          />
          <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={p3Img}
            alt=""
            className="absolute w-20 top-48 left-52"
          />
          <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={p4Img}
            alt=""
            className="absolute w-20 top-48 left-[12.5rem]"
          />
        </div>
      </div>
    </VisibilitySensor>
  );
}
