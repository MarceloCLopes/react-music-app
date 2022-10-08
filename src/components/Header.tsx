import { CenterMenu } from "./CenterMenu";
import musicLogoImg from "../assets/musicLogo.png";

export function Header() {
  const buttonStyle =
    "border-2 rounded-[10px] border-[#232A4E] px-[25px] py-[7px]";

  return (
    <div className="header bg-[#081730] flex items-center justify-between pt-[2.4rem] text-sm px-20">
      {/** Logo */}
      <img src={musicLogoImg} alt="" className="logo w-[42px] h-[42px]" />

      {/** Side menu */}
      <CenterMenu />

      {/** Buttons */}
      <div className="buttons flex gap-9">
        <button className={buttonStyle + ` hover:bg-[#232A4E]`}>Sign up</button>
        <button className={buttonStyle + ` bg-[#232A4E]`}>Log in</button>
      </div>
    </div>
  );
}
