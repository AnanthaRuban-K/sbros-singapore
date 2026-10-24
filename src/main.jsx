import { StrictMode, useEffect, useState } from 'react';
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


// Preloader shows once per browser session (first visit), not on every page load.
// A session cookie is shared by all tabs and cleared when the browser closes.
const PRELOADER_COOKIE = 'sbros_preloader_seen';

const preloaderSeen = () => {
  try {
    return document.cookie.split('; ').some((c) => c.startsWith(`${PRELOADER_COOKIE}=`));
  } catch {
    return false;
  }
};

const markPreloaderSeen = () => {
  try {
    document.cookie = `${PRELOADER_COOKIE}=1; path=/; SameSite=Lax`;
  } catch {
    // cookies blocked: the preloader may show again, which is harmless
  }
};

const App = () => {

  const [loading, setLoading] = useState(() => !preloaderSeen());

  // Mark as seen as soon as it starts, so a refresh during the animation skips it
  useEffect(() => {
    if (loading) markPreloaderSeen();
  }, [loading]);

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