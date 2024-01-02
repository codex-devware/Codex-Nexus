const Sidebar = () => {
  return (
    <section>
      <div>
        <h1 className="text-2xl font-bold text-center mt-6 underline text-blue-500">
          Codex Devware
        </h1>
        <div className=" font-semibold text-sm">
          <div className="collapse-title text-sm font-semibold">Sales Overview</div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border-none -mb-4"
          >
            <div className="collapse-title text-sm font-semibold">
              Order Management
            </div>
            <div className="collapse-content text-sm">
              <ul>
                <li>Total Orders</li>
                <li>Completed Orders</li>
                <li>Pending Orders</li>
                <li>On-Hold Orders</li>
                <li>Refunded Orders</li>
                <li>Failed Orders</li>
              </ul>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse collapse-arrow border-none -mb-4"
          >
            <div className="collapse-title text-sm font-semibold">
              Customer Insight
            </div>
            <div className="collapse-content text-sm">
              <ul>
                <li>Total Customers</li>
                <li>New Customers</li>
                <li>Returing Customers</li>
                <li>Customer Lifetime value</li>
                <li>Customer Demographics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;