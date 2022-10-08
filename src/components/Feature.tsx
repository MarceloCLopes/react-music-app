import { useState } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

interface FeatureProps {
  title: string;
  icon: string;
}

export function Feature({ icon, title }: FeatureProps) {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const variant = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };

  return (
    <VisibilitySensor
      onChange={(isVisible: any) => setElementIsVisible(isVisible)}>
      <div className="feature flex items-center justify-center flex-col relative text-center mx-12 ">
        {/** icon */}
        <motion.div
          variants={variant}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          animate={`${elementIsVisible}`}
          className="icon bg-[#081730] rounded-2xl p-4">
          <img src={icon} alt="" className="w-12" />
        </motion.div>
        <span className="mt-5">{title}</span>
        <span className="text-[#707070] mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facere
          deserunt omnis.
        </span>

        <span className="text-[#E600FF] underline mt-12 hover:cursor-pointer">
          Learn more
        </span>
      </div>
    </VisibilitySensor>
  );
}
