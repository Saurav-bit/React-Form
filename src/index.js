import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageScreen from "./pages/HomePage/HomePageScreen";
import ContactsPageScreen from "./pages/HomePage/ContactsPage/ContactsPageScreen";
import AboutPageScreen from "./pages/AboutPage/AboutPageScreen";
import DashboardScreen from "./pages/Dashboard/DashboardScreen/DashboardScreen";
import DashboardLayout from "./Layout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout/>,
    children: [
      {
        path: "", 
        element: <DashboardScreen/>
      },
      {
        path: "contactNew", 
        element: <ContactsPageScreen /> 
      }
    ],
  },
  // {
  //   path: "home",
  //   element: <HomePageScreen />,
  //   children: [{ path: "contact", element: <ContactsPageScreen />, }],
  // },
  // {
  //   path: "about",
  //   element: <AboutPageScreen />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
