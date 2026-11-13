import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './Routes/Routes.jsx';
import Preloader from './Components/Common/Preloader';

import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/main.css';

// Preloader shows once per tab session (first visit in that tab).
const PRELOADER_KEY = 'sbros_preloader_seen';

const shouldShowPreloader = () => {
  try {
    // 1. force show with ?preloader in the URL (testing)
    if (new URLSearchParams(window.location.search).has('preloader')) {
      return true;
    }
    // 2. always show while developing (npm run dev)
    if (import.meta.env.DEV) {
      return true;
    }
    // 3. production: show only if not seen in this tab
    return !sessionStorage.getItem(PRELOADER_KEY);
  } catch {
    return true;
  }
};

const markPreloaderSeen = () => {
  try {
    sessionStorage.setItem(PRELOADER_KEY, '1');
  } catch {
    // storage blocked: preloader may show again, which is harmless
  }
};

const App = () => {
  const [loading, setLoading] = useState(shouldShowPreloader);

  const handleComplete = () => {
    markPreloaderSeen();
    setLoading(false);
  };

  if (loading) {
    return <Preloader onComplete={handleComplete} />;
  }

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);