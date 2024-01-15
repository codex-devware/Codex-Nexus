import PaymentInfo from "./PaymentInfo";
import PaymentInfoGraph from "./PaymentInfoGraph";

const PaymentData = () => {
  const balanceData = [
    {
      id: 1,
      title: "Last Balance",
      balance: "350$",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          viewBox="0 0 512 512"
          fill="#1652F0"
        >
          <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
        </svg>
      ),
      bColor: "#1652F0",
    },
    {
      id: 2,
      title: "Hold Balance",
      balance: "350$",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          viewBox="0 0 512 512"
          fill="#F73164"
        >
          <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Current Balance",
      balance: "350$",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          viewBox="0 0 512 512"
          fill="#51BB25"
        >
          <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Bounce Balance",
      balance: "350$",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          viewBox="0 0 512 512"
          fill="#DC3545"
        >
          <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
        </svg>
      ),
    },
  ];
  return (
    <>
      <section className="grid grid-cols-2">
        <div className="grid grid-cols-2 gap-6 my-10">
          {balanceData?.map((info) => (
            <PaymentInfo key={info.id} info={info} />
          ))}
        </div>
      </section>
      <section>
        <PaymentInfoGraph />
      </section>
    </>
  );
};

export default PaymentData;
