import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import { Test } from '@/components/Home/Test';

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />

          
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
