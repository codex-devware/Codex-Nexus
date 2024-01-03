const Sidebar = () => {
  return (
    <section>
      <div>
        <h1 className='text-2xl font-bold text-center mt-6 underline text-blue-500'>
          Codex Devware
        </h1>
        <div className='m-6 font-semibold text-md '>
          <div
            tabIndex={0}
            className='collapse collapse-arrow border-none -mb-6'
          >
            <div className='collapse-title text-md font-semibold'>
              Sales Overview
            </div>
            <div className='collapse-content'>
              <ul>
                <li>Total Sales</li>
                <li>Net Sales</li>
                <li>Sales by date range</li>
                <li>Top-selling products</li>
              </ul>
            </div>
          </div>
          <div tabIndex={1} className='collapse collapse-arrow border-none'>
            <div className='collapse-title text-md font-semibold'>
              Order Management
            </div>
            <div className='collapse-content'>
              <ul>
                <li>Pending Orders</li>
                <li>Completed Orders</li>
                <li>On-Hold Orders</li>
                <li>Refunded Orders</li>
                <li>Failed Orders</li>
              </ul>
            </div>
          </div>
          <div tabIndex={2} className='collapse collapse-arrow border-none'>
            <div className='collapse-title text-md font-semibold'>
              Customer Insights
            </div>
            <div className='collapse-content'>
              <ul>
                <li>Top-selling products</li>
                <li>Low-selling products</li>
                <li>Product-wise sales trends</li>
                <li>Inventory status</li>
              </ul>
            </div>
          </div>
          <div tabIndex={3} className='collapse collapse-arrow border-none'>
            <div className='collapse-title text-md font-semibold'>
              Product Performance
            </div>
            <div className='collapse-content'>
              <ul>
                <li>Total Sales</li>
                <li>Net Sales</li>
              </ul>
            </div>
          </div>
          <div tabIndex={4} className='collapse collapse-arrow border-none'>
            <div className='collapse-title text-md font-semibold'>
              Revenue Analytics
            </div>
            <div className='collapse-content'>
              <ul>
                <li>Revenue by date range</li>
                <li>Revenue by product category</li>
                <li>Revenue by location (if applicable)</li>
                <li>Tax and shipping revenue</li>
              </ul>
            </div>
          </div>
          <div tabIndex={5} className='collapse collapse-arrow border-none'>
            <div className='collapse-title text-md font-semibold'>
              Shipping and Tax
            </div>
            <div className='collapse-content'>
              <ul>
                <li>Shipping costs</li>
                <li>Tax collection</li>
                <li>Shipping methods performance</li>
              </ul>
            </div>
          </div>
          <div tabIndex={6} className='collapse collapse-arrow border-none'>
            <div className='collapse-title text-md font-semibold'>
              Coupon and Discount Analytics
            </div>
            <div className='collapse-content'>
              <ul>
                <li>Total coupons used</li>
                <li>Coupon effectiveness</li>
                <li>Discount distribution</li>
              </ul>
            </div>
          </div>
          <div tabIndex={7} className='collapse collapse-arrow border-none'>
            <div className='collapse-title text-md font-semibold'>
              Stock and Inventory Management
            </div>
            <div className='collapse-content'>
              <ul>
                <li>Low stock alerts</li>
                <li>Out of stock products</li>
                <li>Stock level trends</li>
              </ul>
            </div>
          </div>
          <div tabIndex={8} className='collapse collapse-arrow border-none'>
            <div className='collapse-title text-md font-semibold'>
              Refund and Returns
            </div>
            <div className='collapse-content'>
              <ul>
                <li>Refund requests</li>
                <li>Return status</li>
                <li>Refund trends</li>
              </ul>
            </div>
          </div>
          <div tabIndex={9} className='collapse collapse-arrow border-none'>
            <div className='collapse-title text-md font-semibold'>
              Performance Metrics
            </div>
            <div className='collapse-content'>
              <ul>
                <li>Pageviews</li>
                <li>Conversion rate</li>
                <li>Bounce rate</li>
                <li>Average order value</li>
              </ul>
            </div>
          </div>
          <div tabIndex={10} className='collapse collapse-arrow border-none'>
            <div className='collapse-title text-md font-semibold'>
              User Management
            </div>
            <div className='collapse-content'>
              <ul>
                <li>Admin and user roles</li>
                <li>User activity log</li>
                <li>Login history</li>
              </ul>
            </div>
          </div>
          <div tabIndex={11} className='collapse collapse-arrow border-none'>
            <div className='collapse-title text-md font-semibold'>
              Payment Gateway Analytics
            </div>
            <div className='collapse-content'>
              <ul>
                <li>Payment methods used</li>
                <li>Transaction success rates</li>
                <li>Payment gateway performance</li>
              </ul>
            </div>
          </div>
          <div tabIndex={12} className='collapse collapse-arrow border-none'>
            <div className='collapse-title text-md font-semibold'>
              Marketing Analytics
            </div>
            <div className='collapse-content'>
              <ul>
                <li>Traffic sources</li>
                <li>Conversion sources</li>
                <li>Marketing campaign performance</li>
              </ul>
            </div>
          </div>
          <div tabIndex={13} className='collapse collapse-arrow border-none'>
            <div className='collapse-title text-md font-semibold'>
              Customization and Insights
            </div>
            <div className='collapse-content'>
              <ul>
                <li>Dashboard customization options</li>
                <li>Data export and reporting</li>
                <li>Real-time updates</li>
              </ul>
            </div>
          </div>
          <div tabIndex={14} className='collapse collapse-arrow border-none'>
            <div className='collapse-title text-md font-semibold'>Security</div>
            <div className='collapse-content'>
              <ul>
                <li>Security alerts</li>
                <li>Login attempt history</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
