import {
    IcArchive,
    IcDelete,
    IcDown,
    IcFolder,
    IcInfo,
    IcRead,
    IcRefresh
} from "@/assets/icon";


const InboxHeader = () => {
  return (
    <div className="border-b-1 flex flex-wrap justify-between items-center py-4 ">
            {/* left side function  */}
            <div className="w-2/6 flex flex-wrap items-center justify-between">
              {/* check box for all select  */}
              <div className="flex flex-wrap">
                <input
                  type="checkbox"
                  name="all_select"
                  className="color-[#ddd] mr-2 w-4 h-4"
                />

                {/* down arrow for list show  */}
                <IcDown />
              </div>
              {/* refresh system */}
              <IcRefresh />

              {/* archive system  */}
              <IcArchive />

              {/* Info  */}
              <IcInfo />

              <IcDelete/>

              {/* read  */}
              <IcRead />

              {/* Folder system  */}
              <IcFolder />
            </div>

            {/* right side function  */}
            <div>
              <input
                type="text"
                placeholder="Search Mail"
                className="px-2 py-2 rounded-md w-[250px] border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
              />
            </div>
          </div>
  )
}

export default InboxHeader