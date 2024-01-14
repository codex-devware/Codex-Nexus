import AllOrderCalender from "./AllOrderCalender";
import AllOrderPageTable from "./AllOrderPageTable";
import AllOrderTop from "./AllOrderTop";

const AllOrder = () => {
  return (
    <>
      <AllOrderTop />
      <section className="flex flex-wrap">
        <div className="lg:w-[66%] w-full">
          <div className="font-outfit w-full">
            <AllOrderPageTable />
          </div>
        </div>

        <div className="lg:w-[33%] mx-auto rounded-md md:px-0 md:py-0 px-2 py-2 xl:ml-2 shadow border-dashed w-full">
          <AllOrderCalender />
        </div>
      </section>
    </>
  );
};

export default AllOrder;
