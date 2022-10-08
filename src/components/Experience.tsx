import path318Img from "../assets/path318.png";
import group2Img from "../assets/group2.png";
import group4Img from "../assets/group4.png";
import musicIconImg from "../assets/musicIcon.png";
import { Feature } from "./Feature";

export function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-20 bg-[#020917] h-[60rem] pt-72 -mt-40 relative z-[2] rounded-b-[5rem]">
      <img src={path318Img} alt="" className="w-20" />

      {/** heading */}
      <div className="hradline mt-7 flex flex-col items-center text-[2rem]">
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>

      {/** features */}
      <div className="feature flex items-center justify-around mt-24 w-full">
        <Feature icon={group2Img} title="For Live Music" />
        <Feature icon={musicIconImg} title="For Daily Music" />
        <Feature icon={group4Img} title="For Artists" />
      </div>
    </div>
  );
}
