import { IcAddE, IcCalendar, IcExport, IcMenu, IcShare } from "@/assets/icon";

const MailBoxHeader = ({ menuState, setManuState }) => {
  let headerActionBtn =
    "px-6 py-2 bg-[#dce5ff] mb-3 ml-3 flex justify-between rounded-sm font-medium text-sm";
  return (
    <div className="lg:flex lg:flex-wrap sm:block sm:text-center justify-between items-center mt-8">
      <p className="font-medium text-xl sm:mb-4">Inbox</p>
      <div className="action-head flex flex-wrap justify-center items-center md:justify-between">
        <button className={headerActionBtn}>
          <IcCalendar /> Calendar
        </button>
        <button className={headerActionBtn}>
          <IcExport /> Export
        </button>
        <button className={headerActionBtn}>
          <IcShare /> Share
        </button>
        <button className={`bg-blue/50 text-white ${headerActionBtn}`}>
          <IcAddE /> Add New
        </button>
        {/* here we add this menu icon and button for side bar menu show  */}
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
