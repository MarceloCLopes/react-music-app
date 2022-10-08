import { DownloadAds } from "./DownloadAds";
import path318Img from "../assets/path318.png";

export function Download() {
  return (
    <div className="flex flex-col items-center justify-start px-20 bg-[#020917] h-[48rem] pt-72 -mt-40 relative z-0 rounded-b-[5rem]">
      {/** tild icon or path icon */}
      <img src={path318Img} alt="" />

      {/** heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>Download The Best Music</span>
        <span>
          <b>App Now!</b>
        </span>
        <span className="text-base text-gray-400 px-60 text-center mt-4">
          Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
          Vestibulum ullamcorper volutpat varius.
        </span>
      </div>

      {/** download ads */}
      <div className="mt-14">
        <DownloadAds />
      </div>
    </div>
  );
}
