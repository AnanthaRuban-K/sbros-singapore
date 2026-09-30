import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  RouterProvider,
} from 'react-router-dom';

import { router } from './Routes/Routes.jsx';
import Preloader from './Components/Common/Preloader';

import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/main.css';


const App = () => {

  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return <RouterProvider router={router} />;
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);