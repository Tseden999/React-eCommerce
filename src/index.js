import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AboutUs from './Components/AboutUs';
import ContactUS from './Components/ConatctUs';
import NewArrival from './Components/New Arrivals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <AboutUs />,
  },
  {
    path: "contact",
    element: <ContactUS />,
  },
  {
    path: "newArrivals",
    element: <NewArrival />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
