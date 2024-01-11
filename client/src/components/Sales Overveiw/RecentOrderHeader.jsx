import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const RecentOrderHeader = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between p-6">
        <div className="">
          <h1 className="text-xl font-semibold">Recent Orders</h1>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-wrap gap-2">
            <p>Search: </p>
            <input
              className="border w-28 rounded-md focus:outline-[#1E40AF]"
              type="text"
            />
          </div>
          <div className="">
            <span>
              <PiDotsThreeOutlineVerticalFill />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentOrderHeader;
