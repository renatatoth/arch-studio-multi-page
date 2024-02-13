import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './index.css';
import RootLayout from "./routes/RootLayout";
import Index from "./routes/Index";
import About from "./routes/About";
import Portfolio from "./routes/Portfolio";
import Contact from "./routes/Contact";

const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout/>, children: [
            {path: '/', element: <Index/>},
            {path: '/about', element: <About/>},
            {path: '/portfolio', element: <Portfolio/>},
            {path: '/contact', element: <Contact/>}
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
