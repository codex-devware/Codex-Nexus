import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import { MainLayout } from "@/components/layout/MainLayout";
import { useState } from "react";
import AddProduct from "@/Pages/AddProduct/AddProduct";

const Routers = () => {
  const [resize, setResize] = useState(80);
  return (
    <>
      <Router>
        <MainLayout resize={resize} setResize={setResize}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};

export default Routers;
