import { useState } from "react";
import InboxHeader from "./InboxHeader";
import Mail from "./Mail";
import MailBoxHeader from "./MailBoxHeader";
import Sidebar from "./Sidebar";
const MailBox = () => {
  const [menuState, setManuState] = useState(false);

  let classAdded = "";

  if (menuState) {
    classAdded += "w-[300px] ml-[0px] !important absolute";
  } else {
    classAdded += " ml-[-1000px] lg:ml-0";
  }

  let mailAction = "flex items-center my-1 px-2 py-2 rounded-sm text-secondary/60 ";

  return (
    <div>
      {/* header of the mail box  */}
      <MailBoxHeader menuState={menuState} setManuState={setManuState} />

      {/* here start our mail box  */}
      <div className="flex flex-wrap justify-between mt-6">
        {/* this is mail sidebar  */}
        <Sidebar
          menuState={menuState}
          setManuState={setManuState}
          mailAction={mailAction}
          classAdded={classAdded}
        />
        {/* this is main mail box  */}
        <div className="w-[70%] h-[600px] bg-white px-5">
          <InboxHeader />

          {/* mails are here  */}
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
        </div>
      </div>
    </div>
  );
};

export default MailBox;
