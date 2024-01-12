import { FiDownload } from "react-icons/fi";

const OrderManageTopHeader = () => {
  return (
    <section className="mt-8">
      <div className="flex flex-wrap lg:justify-between sm:justify-center justify-center sm:gap-3 gap-3">
        <div className="font-outfit sm:text-left text-center md:text-left lg:text-left">
          <h1 className="text-3xl font-semibold">Hey Dude! ,</h1>
          <p className="text-[#6B7280]">
            <span>Welcome back</span>, {"Let's"} check your order status today!
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="">
            <button className="hover:translate-y-[-2px] duration-300 ease-in-out flex flex-wrap items-center gap-2 border-2 py-2 px-3 rounded-md font-outfit font-medium">
              <span className="text-[#1E40AF]">
                <FiDownload />
              </span>{" "}
              Download Order Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderManageTopHeader;
