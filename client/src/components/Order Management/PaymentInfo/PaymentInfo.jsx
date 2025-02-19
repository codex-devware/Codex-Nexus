const PaymentInfo = ({ info }) => {
  const { title, balance, icon } = info || {};

  return (
    <section className="w-full bg-white border p-5 py-8  rounded-xl hover:translate-y-[-2px] duration-300 ease-in-out cursor-pointer">
      <div className="flex gap-4 justify-center">
        <div className="rounded-lg flex justify-center items-center ">
          <span className="bg-white p-3 rounded-full">{icon}</span>
        </div>
        <article>
          <p className="text-[18px] font-semi-bold">{title}</p>
          <h1 className="gap-10">
            <span className="font-medium text-2xl">{balance}</span>
          </h1>
        </article>
      </div>
    </section>
  );
};

export default PaymentInfo;