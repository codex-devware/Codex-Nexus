import { IcAddCom, IcAddE, IcCalendar, IcCancel, IcDraft, IcExport, IcMail, IcMenu, IcSent, IcShare, IcSpam, IcStarted, IcTrash } from "@/assets/icon";
import { useState } from "react";

const MailBox = () => {
    const [menuState , setManuState] = useState(false);
    
    let classAdded = "";

    if(menuState) {
      classAdded+= "w-[300px] ml-[0px] !important absolute shadow-md"
    }else{
      classAdded +=" ml-[-1000px] lg:ml-0"
    }

    let mailAction = "flex items-center my-1 px-2 py-2 rounded-sm text-blue-600 "
    let headerActionBtn = "px-6 py-2 bg-[#dce5ff] ml-3 flex justify-between rounded-sm font-medium text-sm"

  return (
    <div>
      {/* header of the mail box  */}
        <div className="lg:flex lg:flex-wrap sm:block sm:text-center justify-between items-center mt-8">
            <p className="font-medium text-xl sm:mb-4">Inbox</p>
            <div className="action-head flex flex-wrap justify-center md:justify-between">
                <button className={headerActionBtn}><IcCalendar/> Calendar</button>
                <button className={headerActionBtn}><IcExport/> Export</button>
                <button className={headerActionBtn}><IcShare/> Share</button>
                <button className={`bg-[#0464ff] text-white ${headerActionBtn}`}><IcAddE/> Add New</button>
                {/* here we add this menu icon and button for side bar menu show  */}
                {!menuState && <div className="lg:hidden w-[20px] h-[20px] md:ml-[170px] mb-4" onClick={() => setManuState(true)}> <IcMenu/></div> }
            </div>
            
        </div>
        {/* here start our mail box  */}
    <div className="flex flex-wrap justify-between mt-6"> 
    {/* this is mail sidebar  */}
      <div className={`w-3/12 sm:ml-[-1000px] ${classAdded} bg-white h-auto px-4 py-5 `}>
         {/* here we add this menu icon and button for side bar menu hide  */}
        {menuState && <div className="w-[20px] h-[20px] ml-[90%] mb-4 lg:hidden" onClick={() => setManuState(false)}> <IcCancel/></div> }
        <div className="flex items-center justify-center bg-blue-700 text-white py-2 px-2 align-center rounded-3xl mb-6"> <IcAddCom/> Compose</div>
        <div>
          <div className={`bg-[#daeaff] ${mailAction}`}> <IcMail/> Inbox <label className="w-[25px] h-[25px] rounded-full bg-[#cdf] overflow-hidden text-center xl:ml-[60%] lg:ml-[60%] sm:ml-[35%] sm:text-[14px] ml-[75%]">3</label></div>
          <div className={mailAction}><IcStarted/> Started</div>
          <div className={mailAction}><IcSent/> Sent</div>
          <div className={mailAction}><IcDraft/> Drafts <label className="w-[25px] h-[25px] rounded-full bg-[#cdf] overflow-hidden text-center xl:ml-[60%] lg:ml-[48%]  lg:text-[15px] sm:ml-[35%] sm:text-[14px] ml-[75%]">12</label></div>
          <div className={mailAction}><IcSpam/> Spam</div>
          <div className={mailAction}><IcTrash/> Trash</div>
        </div>
      </div>
      {/* this is main mail box  */}
      <div className="w-[70%] sm:w-full h-[600px] bg-white">
      </div>
    </div>
      
    </div>
  )
}

export default MailBox