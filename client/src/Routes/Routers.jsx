import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import { MainLayout } from '@/components/layout/MainLayout';
import { useState } from 'react';
import OrderHistory from '@/components/Home/OrderHistory';
import ProductPerformance from '@/Pages/ProductPerformance/ProductPerformance';
import InventoryStatus from '@/Pages/ProductPerformance/InventoryStatus/InventoryStatus';
import SaleTrends from '@/Pages/ProductPerformance/SaleTrends/SaleTrends';
import SalesOverveiw from '@/components/Sales Overveiw/SalesOverveiw';
import OrderDetails from '@/components/Home/OrderDetails/OrderDetails';
import AddProduct from '@/components/AddProduct/AddProduct';
import OrderChartTracker from '@/components/Sales Overveiw/OrderChartTracker';
import Users from '@/components/User Management/Users';
import ActivityLog from '@/components/User Management/ActivityLog';

const Routers = () => {
  const [resize, setResize] = useState(80);
  return (
    <>
      <Router>
        <MainLayout resize={resize} setResize={setResize}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/order-management/order-history'
              element={<OrderHistory />}
            />
            <Route
              path='/order-management/order-history/order-history/01'
              element={<OrderDetails />}
            />
            <Route
              path='product-performance'
              element={<ProductPerformance />}
            />
            <Route
              path='/product-performance/product-inventory'
              element={<InventoryStatus />}
            />
            <Route
              path='/product-performance/sale-trends'
              element={<SaleTrends />}
            />
            <Route path='/sales-overview' element={<SalesOverveiw />} />
            <Route path='/order-chart' element={<OrderChartTracker />} />
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/users' element={<Users />} />
            <Route path='/user-activity' element={<ActivityLog />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};

export default Routers;
//routes and categories
/**
 * Dashboard
 *
 * Order-management
 * *Order-status
 * *Order-history
 * *Order-live-Tracking
 *
 * add-product
 *
 * product-performance
 * => top sell
 * =>low sell
 *
 * user-management
 * *users
 * *user-active-log
 * *login history
 *
 * stock-inventory-management
 */
