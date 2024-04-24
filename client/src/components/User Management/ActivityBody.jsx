import { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { MdManageAccounts, MdOutlineShoppingBag } from "react-icons/md";

const ActivityBody = () => {
  const saleData = [
    {
      title: "David Malan Send Mail",
      icon: <IoMdMailUnread fontSize={22} />,
      time: "5 Min Ago",
      message:
        "Exciting news! Customer John Doe just made a purchase. Order #12345 has been successfully placed",
    },
    {
      title: "Alex archived a new board",
      icon: <FaClipboardList fontSize={20} />,
      time: "10 Min Ago",
      message:
        "New account activity detected. User Jane Smith has registered successfully.",
    },
    {
      title: "New Account Activity",
      icon: <MdManageAccounts fontSize={20} />,
      time: "10 Min Ago",
      message:
        "New account activity detected. User Jane Smith has registered successfully.",
    },
    {
      title: "New Purchase",
      icon: <MdOutlineShoppingBag fontSize={20} />,
      time: "5 Min Ago",
      message:
        "Exciting news! Customer John Doe just made a purchase. Order #12345 has been successfully placed",
    },
  ];

  const [selectedBorderIndex, setSelectedBorderIndex] = useState(null);
  const [indexs, setIndex] = useState(null);

  const handleBorderClick = (index) => {
    setSelectedBorderIndex(index);
    setIndex(index);
  };

  return (
    <>
      <div className="flex font-sora items-center gap-4 my-5 mt-4 ">
        <span>Recent Activity</span>
        <span className="h-[2px] rounded-xl w-20 bg-gradient-to-r from-[#750675] via-gray-500 to-white"></span>
      </div>
      {/*ol tag is a main dotted border which main things for down coloring animate when selected the next radius border button */}
      <ol
        className={`border-l-2 border-dotted mb-10    ${
          selectedBorderIndex === indexs ? "border-blue-500" : "border-gray-400"
        } rounded`}
      >
        {saleData?.map((item, index) => (
          <li key={index}>
            <div className={``}>
              {/* Apply active class if index matches selectedBorderIndex */}
              <div
                className={`-ml-[6px] mr-3 h-[9px] w-[9px] rounded-full  cursor-pointer    ${
                  selectedBorderIndex === index ? "bg-blue-500" : "bg-slate-300"
                }`}
                onClick={() => handleBorderClick(index)}
              ></div>
              {/* Apply active class if previous index matches selectedBorderIndex */}
            </div>
            <div className=" ml-4 darkButton">
              <div
                className={`flex items-center justify-between p-3 rounded-xl ${
                  selectedBorderIndex === index ? "bg-blue-200" : "bg-slate-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`${
                      selectedBorderIndex === index
                        ? "bg-blue-300"
                        : "bg-gray-300"
                    } p-3 rounded-full`}
                  >
                    <span className="text-blue-500 font-bold ext-whitet darkButton">
                      {item.icon}
                    </span>
                  </div>
                  <div className="">
                    <div className="flex font-sora items-center gap-3 ">
                      <span className="text-sm font-semibold">
                        {item.title}
                      </span>
                    </div>
                    <span className="font-outfit text-sm  text-gray-700">
                      {item.message}
                    </span>
                  </div>
                </div>
                <div className="">
                  <h5 className="text-sm font-outfit">{item.time}</h5>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};

export default ActivityBody;
