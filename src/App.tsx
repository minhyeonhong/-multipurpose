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
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import styled from 'styled-components';

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
    <StLayoutWrap>
      <Header />
      <StLayout>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </StLayout>
      <Footer />
    </StLayoutWrap>
  );
}

export default App;

const StLayoutWrap = styled.div`
    text-align: center;
`;

const StLayout = styled.div`
    min-height: 100vh;
`;
