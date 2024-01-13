const PaymentInfo = (info) => {
  console.log(info);
  const { title, balance, icon } = info;

  return (
    <>
      <section className="">
        <div>
          <div>
            <img src={icon} alt="icon" />
          </div>
        </div>
        <div>
          <div>
            <h3>{balance}</h3>
            <span>{title}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentInfo;
