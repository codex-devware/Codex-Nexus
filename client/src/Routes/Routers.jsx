import AddProduct from "@/Pages/AddProduct/AddProduct";
import OrderHistory from "@/Pages/OrderManagement/OrderHistory/OrderHistory";
import OrderManagement from "@/Pages/OrderManagement/OrderManagement";
import InventoryStatus from "@/Pages/ProductPerformance/InventoryStatus/InventoryStatus";
import ProductPerformance from "@/Pages/ProductPerformance/ProductPerformance";
import SaleTrends from "@/Pages/ProductPerformance/SaleTrends/SaleTrends";
import OrderDetails from "@/components/Home/OrderDetails/OrderDetails";
import OrderChartTracker from "@/components/Sales Overveiw/OrderChartTracker";
import SalesOverveiw from "@/components/Sales Overveiw/SalesOverveiw";
import ActivityLog from "@/components/User Management/ActivityLog";
import Users from "@/components/User Management/Users";
import { MainLayout } from "@/components/layout/MainLayout";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import StockInventoryList from "@/components/StockInventoryManagement/StockInventoryList";
import SuppliersManagement from "@/components/StockInventoryManagement/SuppliersManagement";
import ReturnOrderManagement from "@/components/StockInventoryManagement/ReturnManagement";
import PaymentData from "@/components/Order Management/PaymentInfo/PaymentData";

const Routers = () => {
  const [resize, setResize] = useState(80);
  return (
    <>
      <Router>
        <MainLayout resize={resize} setResize={setResize}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order-management" element={<OrderManagement />} />
            <Route
              path="/order-management/order-history"
              element={<OrderHistory />}
            />
            <Route
              path="/order-management/payment-info"
              element={<PaymentData />}
            />
            <Route
              path="/order-management/order-history/order-history/01"
              element={<OrderDetails />}
            />
            <Route
              path="product-performance"
              element={<ProductPerformance />}
            />
            <Route
              path="/product-performance/product-inventory"
              element={<InventoryStatus />}
            />

            <Route
              path="/product-performance/sale-trends"
              element={<SaleTrends />}
            />
            <Route path="/sales-overview" element={<SalesOverveiw />} />
            <Route path="/order-chart" element={<OrderChartTracker />} />
            <Route path="/add-product" element={<AddProduct />} />
            {/* stock inventory management routes */}
            <Route
              path="/stock-inventory-management"
              element={<StockInventoryList />}
            />
            <Route
              path="/stock-inventory-management/supplier-management"
              element={<SuppliersManagement />}
            />
            <Route
              path="/stock-inventory-management/return-order-management"
              element={<ReturnOrderManagement />}
            />
            <Route path="/users" element={<Users />} />
            <Route path="/users/user-active-log" element={<ActivityLog />} />
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
