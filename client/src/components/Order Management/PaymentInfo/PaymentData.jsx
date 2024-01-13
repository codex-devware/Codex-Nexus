import PaymentInfo from "./PaymentInfo";

const PaymentData = () => {
  const balanceData = [
    {
      id: 1,
      title: "Last Balance",
      balance: "350$",
      icon: "Icon",
    },
  ];
  return (
    <section>
      {balanceData.map((info) => {
         <PaymentInfo key={info.id} info={info} />;
      })}
    </section>
  );
};

export default PaymentData;
