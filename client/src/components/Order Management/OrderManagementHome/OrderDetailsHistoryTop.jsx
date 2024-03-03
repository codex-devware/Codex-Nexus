const OrderDetailsHistoryTop = () => {
  return (
    <div className="font-outfit w-full">
      <div className=" shadow border rounded-lg">
        <div className="flex flex-wrap justify-between p-6">
          <div className="">
            <h1 className="text-md font-semibold">Order Details</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button className="px-2 py-2 text-xs bg-slate-50 text-gray-700 rounded-md border shadow">
              All Orders
            </button>
            <button className="px-2 py-2 text-xs bg-slate-50 text-green-500 rounded-md border shadow">
              Completed
            </button>
            <button className="px-2 py-2 text-xs text-orange-400 bg-slate-50 rounded-md border shadow">
              In-Progress
            </button>
            <button className="px-2 py-2 text-xs text-red-500 bg-slate-50 rounded-md border shadow">
              Canceled
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsHistoryTop;
