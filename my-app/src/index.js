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
import EditMenu from "./routes/edit-menu";
import NavBar from "./components/NavBar";
import ParentEditMenu from "./components/parent-edit-menu";
import AddPlate from "./routes/add-plate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    // errorElement: <ErrorPage/>
  },
  {
    path: "/add-plate",
    element: <AddPlate />,
  },
  {
    path: "/:plateId",
    element: <ParentEditMenu />,
    // element: <EditMenu />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
