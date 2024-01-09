import thankyouIcon from "../../assets/icon-thank-you.svg";

const Thankyou = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 text-center mt-28">
      <div>
        <img src={thankyouIcon} alt="Thank you" />
      </div>
      <div className="font-bold text-[#02295a] text-3xl">Thank you!</div>
      <p className="text-[#9699ab] text-[14px] w-96">
        Thanks for confirming your Product! Now you can chill yayy
      </p>
    </div>
  );
};

export default Thankyou;
