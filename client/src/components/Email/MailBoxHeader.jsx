import { IcAddE, IcCalendar, IcExport, IcMenu, IcShare } from "@/assets/icon";
import { useState } from "react";
import Button from "./Button";

const MailBoxHeader = ({ menuState, setManuState }) => {
  // button bg toggle state
  const [activeButtonId, setActiveButtonId] = useState(null);

  const handleSetActiveButtonId = (id) => {
    setActiveButtonId(id);
  };

  const buttons = [
    { title: "Calendar", icon: <IcCalendar /> },
    { title: "Export", icon: <IcExport /> },
    { title: "Share", icon: <IcShare /> },
    { title: "Add New", icon: <IcAddE /> },
  ];

  // button style
  let defaultBtnStyle =
    "px-6  py-2  mb-3 ml-3 flex justify-between items-center rounded-sm font-medium text-sm ease-in duration-200 ";

  return (
    <div className="lg:flex lg:flex-wrap sm:block sm:text-center justify-between items-center mt-8">
      <p className="font-medium text-xl sm:mb-4">Inbox</p>
      <div className="action-head flex flex-wrap justify-center items-center md:justify-between">
        {buttons.map((button, index) => (
          <Button
            key={index}
            btnCom={{
              title: button.title,
              defaultStyle: defaultBtnStyle,
              toggleStyle:
                activeButtonId === index
                  ? "bg-[#5F63F2] text-white"
                  : "bg-[#fff] text-black",
              icon: button.icon,
              onClick: () => handleSetActiveButtonId(index),
            }}
          />
        ))}

        {!menuState && (
          <div
            className="lg:hidden px-5 py-2 ml-3 rounded-sm bg-white shadow-md  mb-4 text-center"
            onClick={() => setManuState(true)}
          >
            <IcMenu />
          </div>
        )}
      </div>
    </div>
  );
};

export default MailBoxHeader;
