import { createRoot } from "react-dom/client";
import App from "./App"
import CountryDetail from "./component/CountryDetail";
import {
    createBrowserRouter,
    RouterProvider,

  } from "react-router-dom";
import ErrorPage from "./component/ErrorPage";
import Home from "./component/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path: '/',
            element:<Home/>
        },
        {
            path:"/:country",
            element:<CountryDetail/>,
        },
      ]
    },
  ]);

const root = createRoot(document.querySelector("#root"))
root.render(<>
<RouterProvider router={router}/>
</>)