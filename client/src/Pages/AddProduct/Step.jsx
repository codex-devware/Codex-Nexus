import { useEffect, useState } from "react";

const Step = ({ number, title, active }) => {
  const [bg, setBg] = useState("");
  useEffect(() => {
    if (active) setBg("bg-[#adbeff]");
    else setBg("");
  }, [active]);

  return (
    <div className="md:flex items-center justify-center space-x-7 text-white">
      <div
        className={`font-bold border p-2 ${bg} text-center w-10 h-10 rounded-full`}
      >
        {number}
      </div>
      <div className="">
        <div className="font-regular text-[#d6d9e6] text-[14px]">
          Step {number}
        </div>
        <div className="font-bold text-[12px] md:text[15px]">{title}</div>
      </div>
    </div>
  );
};

export default Step;
