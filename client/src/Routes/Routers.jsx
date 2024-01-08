import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import { MainLayout } from "@/components/layout/MainLayout";
import { useState } from "react";
import OrderHistory from "@/components/Home/OrderHistory";
import ProductPerformance from "@/Pages/ProductPerformance/ProductPerformance";
import InventoryStatus from "@/Pages/ProductPerformance/InventoryStatus/InventoryStatus";
import SaleTrends from "@/Pages/ProductPerformance/SaleTrends/SaleTrends";
import SalesOverveiw from "@/components/Sales Overveiw/SalesOverveiw";
import OrderDetails from "@/components/Home/OrderDetails/OrderDetails";

const Routers = () => {
  const [resize, setResize] = useState(80);
  return (
    <>
      <Router>
        <MainLayout resize={resize} setResize={setResize}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/order-history/01" element={<OrderDetails />} />
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
            <Route path="/seals-overview" element={<SalesOverveiw />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};

export default Routers;
