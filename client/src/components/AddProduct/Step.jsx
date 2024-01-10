import { useEffect, useState } from "react";

const Step = ({ number, title, active }) => {
  const [bg, setBg] = useState("");
  useEffect(() => {
    if (active) setBg("bg-[#adbeff]");
    else setBg("");
  }, [active]);

  return (
    <div className="flex space-x-7 text-white">
      <div
        className={`font-bold border p-2 ${bg} text-center w-10 h-10 rounded-full`}
      >
        {number}
      </div>
      <div className="xl:block md:flex items-center justify-center hidden">
        <div className="font-regular hidden xl:block text-[#d6d9e6] text-[14px]">
          Step {number}
        </div>
        <div className="font-bold text-[14px] xl:block lg:block md:block hidden">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Step;
