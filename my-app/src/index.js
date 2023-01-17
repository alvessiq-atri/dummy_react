import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import Root from './routes/root';
// import ErrorPage from './error-page';
import Contact from "./routes/contact";
// import App from './App';
import Homepage from "./routes/homepage";
import Cart from "./routes/cart";
import BuildMarmita from "./routes/build-marmita";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    // errorElement: <ErrorPage/>
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
  {
    path: "/build-marmita",
    element: <BuildMarmita />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
