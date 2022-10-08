import { Facebook, Twitter, YouTube, LinkedIn } from "@mui/icons-material";
import { CenterMenu } from "./CenterMenu";

export function Footer() {
  const socialStyles = "rounded-full border-2 border-white p-2 mr-20";

  return (
    <div className="footer flex flex-col items-center justify-start px-20 bg-[#081730] h-[45rem] pt-72 -mt-40 relative -z-[1]">
      <CenterMenu />

      {/** Social icons */}
      <div className="flex w-full justify-center mt-14">
        <div className={socialStyles}>
          <Facebook />
        </div>
        <div className={socialStyles}>
          <Twitter />
        </div>
        <div className={socialStyles}>
          <YouTube />
        </div>
        <div className={socialStyles}>
          <LinkedIn />
        </div>
      </div>

      {/** Details */}
      <span className="text-base text-gray-400 px-60 text-center mt-16">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
    </div>
  );
}
