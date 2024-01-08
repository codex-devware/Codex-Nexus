import { useState, useEffect } from "react";
import AddonComponent from "./AddonComponent";
import SectionHeading from "./SectionHeading";

const Addons = ({ onBoxCheck, planDuration, addonOptions }) => {
  const [bg, setBg] = useState("black");

  useEffect(() => {}, []);

  return (
    <div>
      <SectionHeading
        title="Pick one Product Categories"
        desc="Pick one product categories enhances your business."
      />
      <div className="space-y-5">
        {addonOptions.map((addon) => (
          <AddonComponent
            onBoxCheck={onBoxCheck}
            key={addon.id}
            id={addon.id}
            title={addon.title}
            desc={addon.desc}
            price={addon.price}
            selected={addon.selected}
            planDuration={planDuration}
          />
        ))}
      </div>
    </div>
  );
};

export default Addons;
