import 'bootstrap/dist/css/bootstrap.css';
import './fonts.sass';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Home from "./pages/home";
import SignIn from "./pages/auth/signin";
import Categories from "./pages/categories";
import SignUp from "./pages/auth/signup";
import MoreWatchdogs, {moreWatchdogsLoader} from "./pages/morewatchdogs";
import Care, {careLoader} from "./pages/care";
import Facts, {factsLoader} from "./pages/facts";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/categories',
        element: <Categories />,
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/categories/:id',
        element: <MoreWatchdogs />,
        loader: moreWatchdogsLoader
    },
    {
        path: '/care',
        element: <Care />,
        loader: careLoader
    },
    {
        path: '/facts',
        element: <Facts />,
        loader: factsLoader
    }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
