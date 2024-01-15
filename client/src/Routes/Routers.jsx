import AddProduct from '@/Pages/AddProduct/AddProduct';
import AllOrderMain from '@/Pages/OrderManagement/AllOrder/AllOrderMain';
import OrderHistory from '@/Pages/OrderManagement/OrderHistory/OrderHistory';
import OrderManagement from '@/Pages/OrderManagement/OrderManagement';
import InventoryStatus from '@/Pages/ProductPerformance/InventoryStatus/InventoryStatus';
import ProductPerformance from '@/Pages/ProductPerformance/ProductPerformance';
import SaleTrends from '@/Pages/ProductPerformance/SaleTrends/SaleTrends';
import OrderDetails from '@/components/Home/OrderDetails/OrderDetails';
import OrderStatus from '@/components/Order Management/OrderStatus/OrderStatus';
import PaymentData from '@/components/Order Management/PaymentInfo/PaymentData';
import OrderChartTracker from '@/components/Sales Overveiw/OrderChartTracker';
import SalesOverveiw from '@/components/Sales Overveiw/SalesOverveiw';
import Login from '@/components/Security/Login/Login';
import Register from '@/components/Security/Register/Register';
import ReturnOrderManagement from '@/components/StockInventoryManagement/ReturnManagement';
import StockInventoryList from '@/components/StockInventoryManagement/StockInventoryList';
import SuppliersManagement from '@/components/StockInventoryManagement/SuppliersManagement';
import ActivityLog from '@/components/User Management/ActivityLog';
import Users from '@/components/User Management/Users';
import { MainLayout } from '@/components/layout/MainLayout';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';

const Routers = () => {
  const [resize, setResize] = useState(80);
  return (
    <>
      <Router>
        <MainLayout resize={resize} setResize={setResize}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/order-management' element={<OrderManagement />} />
            <Route
              path='/order-management/all-orders'
              element={<AllOrderMain />}
            />
            <Route
              path='/order-management/order-history'
              element={<OrderHistory />}
            />
            <Route
              path='/order-management/order-status'
              element={<OrderStatus />}
            />
            <Route
              path='/order-management/payment-info'
              element={<PaymentData />}
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
            {/* stock inventory management routes */}
            <Route
              path='/stock-inventory-management'
              element={<StockInventoryList />}
            />
            <Route
              path='/stock-inventory-management/supplier-management'
              element={<SuppliersManagement />}
            />
            <Route
              path='/stock-inventory-management/return-order-management'
              element={<ReturnOrderManagement />}
            />
            <Route path='/users' element={<Users />} />
            <Route path='/users/user-active-log' element={<ActivityLog />} />
            <Route path='/security/register' element={<Register />} />
            <Route path='/security/login' element={<Login />} />
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
