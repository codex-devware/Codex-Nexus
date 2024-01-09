import thankyouIcon from "../../assets/icon-thank-you.svg";

const Thankyou = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 text-center mt-4">
      <div>
        <img src={thankyouIcon} alt="Thank you" />
      </div>
      <div className="font-bold text-[#02295a] text-3xl">Thank you!</div>
      <p className="text-[#9699ab] text-[14px] w-96">
        Thanks for confirming your Product! now you can chill yayaa. and goto
        sleep now
      </p>
    </div>
  );
};

export default Thankyou;
