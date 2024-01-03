import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import { MainLayout } from '@/components/layout/MainLayout';

const Routers = () => {
  return (
    <>
      <Router>
<<<<<<< HEAD
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<Test />} />
        </Routes>
=======
        <MainLayout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </MainLayout>
>>>>>>> 72021b26e6bec40bbca442a7d21c91e09548e9bc
      </Router>
    </>
  );
};

export default Routers;
