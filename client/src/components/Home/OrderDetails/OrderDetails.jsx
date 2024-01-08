const OrderDetails = () => {
  return (
    <section className="p-6">
      {/* order details top bar  */}
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Order Details</h2>
        <ul className="flex font-semibold text-xl gap-4">
          <li>Order</li>
          <li></li>
          <li>Order Details</li>
        </ul>
      </div>
      <div className="border-2 p-4 m-4">
        {/* specific order details cards wrapper  */}
        <div>
          {/* specific order details */}
          <div className="flex justify-between">
            <div className="flex gap-4 font-semibold text-2xl">
              <h2>Order #num123</h2>
              <span>.</span>
              <span>Jan 18, 2023</span>
              <span>.</span>
              <span>3 Products</span>
            </div>
            <button className="font-semibold text-xl">Back To List</button>
          </div>
          <div className="grid gap-6 grid-cols-4 p-5">
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
                <span className="text-[#777777]">
                  md.kawsar.developer@gmail.com
                </span>
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
                <span className="text-[#777777]">
                  md.kawsar.developer@gmail.com
                </span>
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
                <li className="flex justify-between border-b-2 p-2">
                  <span>Subtotal:</span>
                  <span className="font-semibold">$100.00</span>
                </li>
                <li className="flex justify-between border-b-2 p-2">
                  <span>Discount:</span>
                  <span className="font-semibold">50%</span>
                </li>
                <li className="flex justify-between border-b-2 p-2">
                  <span>Shipping:</span>
                  <span className="font-semibold">Free</span>
                </li>
                <li className="flex justify-between border-b-2 p-2">
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
              <div className="min-w-full text-lg font-semibold text-center grid align-middle">
                <img src="" alt="Delivery-Icon" />
                <span>Kawsar Logistics</span>
                <span>Id: ka1234</span>
                <span>Payment Mode: Prepaid(Debit Card)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
