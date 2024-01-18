const PaymentInfo = ({ info }) => {
  const { title, balance, icon } = info || {};

  return (
    <>
      <section className="flex flex-wrap w-[268px] flex-col font-outfit border p-5 rounded-xl hover:translate-y-[-2px] duration-300 ease-in-out cursor-pointer">
        <div className="grid grid-cols-5 flex-col gap-4 ">
          <div className="rounded-lg col-span-2 flex justify-center items-center ">
            <span className="bg-white p-3 rounded-full">{icon}</span>
          </div>
          <div className="col-span-3">
            <p className="text-[18px] font-semi-bold">{title}</p>
            <h1 className=" gap-10  ">
              <span className=" font-medium text-2xl">{balance}</span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentInfo;
