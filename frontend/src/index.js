import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Query1 from "./pages/query1";
import Query2 from "./pages/query2";
import Query3 from "./pages/query3";
import Query4 from "./pages/query4";
import Query5 from "./pages/query5";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <App />
        <Footer />
      </>
    ),
  },
  {
    path: "/query1",
    element: (
      <>
        <Header />
        <Query1 />
        <Footer />
      </>
    ),
  },
  {
    path: "/query2",
    element: (
      <>
        <Header />
        <Query2 />
        <Footer />
      </>
    ),
  },
  {
    path: "/query3",
    element: (
      <>
        <Header />
        <Query3 />
        <Footer />
      </>
    ),
  },
  {
    path: "/query4",
    element: (
      <>
        <Header />
        <Query4 />
        <Footer />
      </>
    ),
  },
  {
    path: "/query5",
    element: (
      <>
        <Header />
        <Query5 />
        <Footer />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
