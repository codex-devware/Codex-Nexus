const PaymentCard = () => {
  return (
    <section className="m-8">
      <div className="bg-black rounded text-white p-6">
        <div className="flex justify-between items-center">
          <span className=" font-bold text-[#777]">Debit Card</span>
          <img
            className="w-24 h-16"
            src="https://static.vecteezy.com/system/resources/previews/022/100/873/non_2x/visa-logo-transparent-free-png.png"
            alt=""
          />
        </div>
        <h3 className="text-xl font-bold space-x-3">
          <span>1234</span>
          <span> 5678</span>
          <span> 5646</span>{" "}
        </h3>
        <div className="flex justify-between items-center mt-6 text-sm">
          <h4 className="font-bold">Md Kawsar</h4>
          <span>Exp: 12/26</span>
        </div>
      </div>
      <div className="mt-4 shadow-md rounded p-6 ">
        <div className="flex justify-between items-center">
          <span className=" font-bold text-[#777]">Debit Card</span>
          <img
            className="w-24 h-16"
            src="https://w7.pngwing.com/pngs/343/18/png-transparent-payoneer-payment-logo-business-bank-mastercard-company-text-trademark.png"
            alt=""
          />
        </div>
        <h3 className="text-xl font-bold space-x-3">
          <span>1234</span>
          <span> 5678</span>
          <span> 5646</span>{" "}
        </h3>
        <div className="flex justify-between items-center mt-6 text-sm">
          <h4 className="font-bold">Md Kawsar</h4>
          <span>Exp: 12/26</span>
        </div>
      </div>
    </section>
  );
};

export default PaymentCard;
