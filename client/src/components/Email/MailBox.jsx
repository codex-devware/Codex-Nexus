import { IcAddCom, IcAddE, IcCalendar, IcDraft, IcExport, IcMail, IcSent, IcShare, IcSpam, IcStarted, IcTrash } from "@/assets/icon"

const MailBox = () => {
    let mailAction = "flex items-center my-1 px-2 py-2 rounded-sm text-blue-600 "
    let headerActionBtn = "px-6 py-2 bg-[#dce5ff] ml-3 flex justify-between rounded-sm font-medium text-sm"

  return (
    <div>
      {/* header of the mail box  */}
        <div className="flex flex-wrap justify-between items-center mt-8">
            <p className="font-medium text-xl">Inbox</p>
            <div className="action-head flex">
                <button className={headerActionBtn}><IcCalendar/> Calendar</button>
                <button className={headerActionBtn}><IcExport/> Export</button>
                <button className={headerActionBtn}><IcShare/> Share</button>
                <button className={`bg-[#0464ff] text-white ${headerActionBtn}`}><IcAddE/> Add New</button>
            </div>
        </div>
        {/* here start our mail box  */}
    <div className="flex flex-wrap justify-between mt-6"> 
    {/* this is mail sidebar  */}
      <div className="w-3/12 bg-white h-auto px-4 py-5">
        <div className="flex items-center justify-center bg-blue-700 text-white py-2 px-2 align-center rounded-3xl mb-6"> <IcAddCom/> Compose</div>
        <div>
          <div className={`bg-[#daeaff] ${mailAction}`}> <IcMail/> Inbox <label className="w-[25px] h-[25px] rounded-full bg-[#cdf] overflow-hidden text-center ml-[75%]">3</label></div>
          <div className={mailAction}><IcStarted/> Started</div>
          <div className={mailAction}><IcSent/> Sent</div>
          <div className={mailAction}><IcDraft/> Drafts <label className="w-[25px] h-[25px] rounded-full bg-[#cdf] overflow-hidden text-center ml-[75%]">12</label></div>
          <div className={mailAction}><IcSpam/> Spam</div>
          <div className={mailAction}><IcTrash/> Trash</div>
        </div>
      </div>
      {/* this is main mail box  */}
      <div className="w-[70%] h-[600px] bg-white">
      </div>
    </div>
      
    </div>
  )
}

export default MailBox