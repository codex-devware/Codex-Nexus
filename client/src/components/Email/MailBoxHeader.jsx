import { IcAddE, IcCalendar, IcExport, IcMenu, IcShare } from "@/assets/icon";
import { useState } from "react";
import Button from "./Button";

const MailBoxHeader = ({ menuState, setManuState }) => {
  // button bg toggle state
  const [buttonId, setButtonId] = useState(null);

  const handleBtnBg = (id) => {
    setButtonId((prevId) => (prevId === id ? "" : id));
  };

  // button style
  let headerActionBtn =
    "px-6 py-2 bg-[#fff] mb-3 ml-3 flex justify-between items-center rounded-sm font-medium text-sm ease-in duration-200";

  // button toggle style
  let toggleBtnColor = "bg-[#5F63F2] text-white ";

  return (
    <div className="lg:flex lg:flex-wrap sm:block sm:text-center justify-between items-center mt-8">
      <p className="font-medium text-xl sm:mb-4">Inbox</p>
      <div className="action-head flex flex-wrap justify-center items-center md:justify-between">
        <Button
          btnCom={{
            title: "Calender",
            defaultStyle: headerActionBtn,
            toggleStyle: buttonId === 0 ? toggleBtnColor : "",
            toggle: () => handleBtnBg(0),
            icon: <IcCalendar color={buttonId === 0 ? "text-white" : ""} />,
          }}
        />

        <Button
          btnCom={{
            title: "Export",
            defaultStyle: headerActionBtn,
            toggleStyle: buttonId === 1 ? toggleBtnColor : "",
            toggle: () => handleBtnBg(1),
            icon: <IcExport color={buttonId === 1 ? "text-white" : ""} />,
          }}
        />
        <Button
          btnCom={{
            title: "Share",
            defaultStyle: headerActionBtn,
            toggleStyle: buttonId === 2 ? toggleBtnColor : "",
            toggle: () => handleBtnBg(2),
            icon: <IcShare color={buttonId === 2 ? "text-white" : ""} />,
          }}
        />

        <Button
          btnCom={{
            title: "Add New",
            defaultStyle: headerActionBtn,
            toggleStyle: buttonId === 3 ? toggleBtnColor : "",
            toggle: () => handleBtnBg(3),
            icon: <IcAddE color={buttonId === 3 ? "text-white" : ""} />,
          }}
        />

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
