import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Routers from './Routes/Routers.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routers />
  </StrictMode>
);
