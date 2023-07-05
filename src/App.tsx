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
import ReactGA from "react-ga";
import MultipleSearch from './pages/MultipleSearch';
import Notepad from './pages/Notepad';

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID;
ReactGA.initialize(gaTrackingId!, { debug: true }); // react-ga 초기화 및 debug 사용
ReactGA.pageview(window.location.pathname); // 추적하려는 page 설정

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
      // {
      //   path: '/multipleSearch',
      //   element: <MultipleSearch />,
      // },
      {
        path: '/notepad',
        element: <Notepad />,
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
    height: 80vh;
`;
