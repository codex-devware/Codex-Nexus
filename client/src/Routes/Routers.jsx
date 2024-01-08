import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import { MainLayout } from '@/components/layout/MainLayout';
import { useState } from 'react';
import OrderHistory from '@/components/Home/OrderHistory';
import ProductPerformance from '@/Pages/ProductPerformance/ProductPerformance';
import InventoryStatus from '@/Pages/ProductPerformance/InventoryStatus/InventoryStatus';
import SaleTrends from '@/Pages/ProductPerformance/SaleTrends/SaleTrends';
import SalesOverveiw from '@/components/Sales Overveiw/SalesOverveiw';

const Routers = () => {
  const [resize, setResize] = useState(80);
  return (
    <>
      <Router>
        <MainLayout resize={resize} setResize={setResize}>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='order-management' element={<OrderHistory />} />
            <Route path='order-management/order-history' element={<OrderHistory />} />
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
            <Route path='/seals-overview' element={<SalesOverveiw />} />
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