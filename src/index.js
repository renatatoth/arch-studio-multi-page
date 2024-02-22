import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './index.scss';
import RootLayout from "./routes/RootLayout";
import Home from "./routes/Home";
import About from "./routes/About";
import Portfolio from "./routes/Portfolio";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout/>, children: [
            {path: '/', element: <Home/>},
            {path: '/about', element: <About/>},
            {path: '/portfolio', element: <Portfolio/>},
            {path: '/contact', element: <Contact/>},
            {path: '*', element: <NotFound/>}
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
