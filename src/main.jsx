import { Suspense, lazy, StrictMode } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppProvider } from './AppContext';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import CircularLoader from './components/CircularLoader';
import NoMatchingRoute from './components/NoMatchingRoute';
const DummyTable = lazy(() => import('./tabs/DummyTable'));
const DummyChart = lazy(() => import('./tabs/DummyChart'));
const DummyList = lazy(() => import('./tabs/DummyList'));

const baseURL = import.meta.env.BASE_URL;

const router = createBrowserRouter([
  {
    path: baseURL,
    element: <App />,
    children: [
      {
        path: baseURL + 'dummyTable',
        element:
          <Suspense fallback={<CircularLoader />}>
            <DummyTable />
          </Suspense>,
      },
      {
        path: baseURL + 'dummyChart',
        element:
          <Suspense fallback={<CircularLoader />}>
            <DummyChart />
          </Suspense>,
      },
      {
        path: baseURL + 'dummyList',
        element:
          <Suspense fallback={<CircularLoader />}>
            <DummyList />
          </Suspense>,
      },
      {
        path: baseURL + '*',
        element: <NoMatchingRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>
);
