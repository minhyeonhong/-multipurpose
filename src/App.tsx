import './App.css';
import {
  Outlet,
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Stopwatch from './pages/Stopwatch';
import { HelmetProvider } from 'react-helmet-async';
import Countdown from './pages/Countdown';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <div />,
    children: [
      {
        index: true,
        path: '/',
        element: <Stopwatch />,
      },
      {
        path: '/countdown',
        element: <Countdown />,
      },
      {
        path: '*',
        element: <Navigate replace to='/' />,
      },
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
