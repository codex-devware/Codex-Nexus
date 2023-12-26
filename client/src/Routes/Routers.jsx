import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
