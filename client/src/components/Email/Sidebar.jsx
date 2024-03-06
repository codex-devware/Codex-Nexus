import {
    IcAddCom,
    IcCancel,
    IcDraft,
    IcMail,
    IcSent,
    IcSpam,
    IcStarted,
    IcTrash
} from "@/assets/icon";

  
const Sidebar = ({menuState , setManuState, mailAction, classAdded}) => {
  return (
    <div className={`w-3/12  ${classAdded} bg-white h-auto px-4 py-5 `}>
          {/* here we add this menu icon and button for side bar menu hide  */}
          {menuState && (
            <div
              className="w-[20px] h-[20px] ml-[90%] mb-4 lg:hidden"
              onClick={() => setManuState(false)}
            >
              {" "}
              <IcCancel />
            </div>
          )}
          <div className="flex items-center justify-center bg-blue-700 text-white py-2 px-2 align-center rounded-3xl mb-6">
            {" "}
            <IcAddCom /> Compose
          </div>
          <div>
            <div className={`bg-[#daeaff] ${mailAction}`}>
              {" "}
              <IcMail /> Inbox{" "}
              <label className="w-[25px] h-[25px] rounded-full bg-[#cdf] overflow-hidden text-center 2xl:ml-[70%] xl:ml-[60%] lg:ml-[45%] ml-[60%] sm:text-[14px] ">
                3
              </label>
            </div>
            <div className={mailAction}>
              <IcStarted /> Started
            </div>
            <div className={mailAction}>
              <IcSent /> Sent
            </div>
            <div className={mailAction}>
              <IcDraft /> Drafts{" "}
              <label className="w-[25px] h-[25px] rounded-full bg-[#cdf] overflow-hidden text-center 2xl:ml-[70%] xl:ml-[60%] lg:ml-[45%] ml-[60%] sm:text-[14px] lg:text-[15px]">
                12
              </label>
            </div>
            <div className={mailAction}>
              <IcSpam /> Spam
            </div>
            <div className={mailAction}>
              <IcTrash /> Trash
            </div>
          </div>
        </div>
  )
}

export default Sidebar