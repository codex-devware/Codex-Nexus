import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import { MainLayout } from "@/components/layout/MainLayout";

const Routers = () => {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};

export default Routers;
