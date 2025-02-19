import expressIcon from "../../../assets/express-delivery.png";

const OrderDetails = () => {
  return (
    <section className="p-6">
      {/* order details top bar  */}
      <div className="flex justify-between flex-wrap">
        <h2 className="text-2xl font-semibold">Order Details</h2>
        <ul className="flex font-semibold text-xl gap-4 items-center">
          <li>Order</li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14"
              width="9"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </li>
          <li className="text-secondary">Order Details</li>
        </ul>
      </div>
      <div className="border-2 m-4 rounded">
        <div className=" p-4">
          {/* specific order details cards wrapper  */}
          <div className="flex justify-between flex-wrap ">
            <div className="flex gap-4 items-center flex-wrap">
              <h2 className=" font-semibold text-2xl">Order #num123</h2>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="4"
                  width="4"
                  viewBox="0 0 512 512"
                  fill="#777777"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                </svg>
              </span>
              <span>Jan 18, 2023</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="4"
                  width="4"
                  viewBox="0 0 512 512"
                  fill="#777777"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                </svg>
              </span>
              <span>3 Products</span>
            </div>
            <button className="font-bold text-xl text-secondary/70 ">
              Back To List
            </button>
          </div>
          <div className="grid gap-6 lg:grid-cols-4 lg:p-5">
            {/* Billing Address card  */}
            <div className=" border-2 rounded p-4">
              <h5 className="text-lg font-semibold border-b-2 mb-4">
                Billing Address
              </h5>
              <div className="mb-4">
                <h4 className="text-xl font-semibold">Md Kawsar</h4>
                <address className="text-[#777777]">
                  08 word, Fulgazi, Feni
                </address>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-semibold">Email</h4>
                <span className="text-[#777777]">md.kawsar@gmail.com</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Phone</h4>
                <span className="text-[#777777]">+8801580-380982</span>
              </div>
            </div>
            {/* Shipping Adress Card  */}
            <div className=" border-2 rounded p-4">
              <h5 className="text-lg font-semibold border-b-2 mb-4">
                Shipping Address
              </h5>
              <div className="mb-4">
                <h4 className="text-xl font-semibold">Md Kawsar</h4>
                <address className="text-[#777777]">
                  08 word, Fulgazi, Feni
                </address>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-semibold">Email</h4>
                <span className="text-[#777777]">md.kawsar@gmail.com</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Phone</h4>
                <span className="text-[#777777]">+8801580-380982</span>
              </div>
            </div>
            {/* Total Payment Card  */}
            <div className=" border-2 rounded p-4">
              <h4 className="text-lg font-semibold border-b-2">
                Total Payment:{" "}
              </h4>
              <ul>
                <li className="flex justify-between border-b-2 px-2 py-3">
                  <span>Subtotal:</span>
                  <span className="font-semibold">$100.00</span>
                </li>
                <li className="flex justify-between border-b-2 px-2 py-3">
                  <span>Discount:</span>
                  <span className="font-semibold">50%</span>
                </li>
                <li className="flex justify-between border-b-2 px-2 py-3">
                  <span>Shipping:</span>
                  <span className="font-semibold">Free</span>
                </li>
                <li className="flex justify-between px-2 py-3">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="font-bold text-lg">$50.00</span>
                </li>
              </ul>
            </div>
            {/* delivery detail card  */}
            <div className=" border-2 rounded p-4">
              <h4 className="text-lg font-semibold border-b-2">
                Delivery Details
              </h4>
              <div className="min-w-full font-semibold text-center grid align-middle justify-items-center">
                <img
                  className="w-12 h-12 mt-6"
                  src={expressIcon}
                  alt="Delivery-Icon"
                />
                <span>Kawsar Logistics</span>
                <span>Id: ka1234</span>
                <span>Payment Mode: Prepaid(Debit Card)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 my-12">
          <div className="col-start-1 lg:col-end-10">
            {" "}
            <ul className="w-full steps steps-vertical lg:steps-horizontal">
              <li className="step step-primary">Order Recieved</li>
              <li className="step step-primary">Process</li>
              <li className="step ">On The Way</li>
              <li className="step">Delivered</li>
            </ul>
          </div>
          <div className=" border-2 rounded p-4 lg:col-start-10 lg:col-end-13 lg:mr-4">
            <h4 className="text-lg font-semibold border-b-2">
              Total Payment:{" "}
            </h4>
            <ul>
              <li className="flex justify-between border-b-2 p-2">
                <span>Transaction ID:</span>
                <span className="font-semibold">#20234567213</span>
              </li>
              <li className="flex justify-between border-b-2 p-2">
                <span>Payment Method:</span>
                <span className="font-semibold">#202345673</span>
              </li>
              <li className="flex justify-between border-b-2 p-2">
                <span>Card Holder Name:</span>
                <span className="font-semibold">Md Kawsar</span>
              </li>
              <li className="flex justify-between border-b-2 p-2">
                <span>Card Number:</span>
                <span className="font-semibold">1234 4354 4564</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
