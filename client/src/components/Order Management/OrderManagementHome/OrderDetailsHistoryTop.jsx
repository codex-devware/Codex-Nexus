const OrderDetailsHistoryTop = ({ setFilter }) => {
  const btnClass = "px-2 py-2 text-xs rounded-md border shadow";
  return (
    <div className="font-outfit w-full bg-white">
      <div className=" shadow border rounded-t-lg !border-b-0">
        <div className="flex items-center flex-wrap justify-between p-6">
          <h1 className="text-md font-semibold">Order Details</h1>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`bg-slate-50 text-gray-700 ${btnClass}`}
            >
              All Orders
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`bg-slate-50 text-highlight ${btnClass}`}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter("in-progress")}
              className={`text-secondary bg-slate-50 ${btnClass}`}
            >
              In-Progress
            </button>
            <button
              onClick={() => setFilter("canceled")}
              className={`text-primary bg-slate-50 ${btnClass}`}
            >
              Canceled
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsHistoryTop;
