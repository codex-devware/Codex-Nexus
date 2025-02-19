import thankyouIcon from "../../assets/icon-thank-you.svg";

const Thankyou = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 text-center mt-4">
      <div>
        <img src={thankyouIcon} alt="Thank you" />
      </div>
      <div className="font-bold text-secondary/20 text-3xl">Thank you!</div>
      <p className="text-[#9699ab] text-[14px] w-96">
        Thanks for confirming your Product! now you can chill yayaa. and goto
        sleep now
      </p>
      <button className=" px-3 font-sora py-2 text-sm bg-secondary/20 text-white rounded-md">
        Add Another Product
      </button>
    </div>
  );
};

export default Thankyou;
