import { createBrowserRouter } from "react-router-dom";
import * as pages from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <pages.About />,
  },
  {
    path: "/lineup",
    element: <pages.Lineup />,
  },
  {
    path: "/support",
    element: <pages.Support />,
  },
  {
    path: "/contact",
    element: <pages.Contact />,
  },
]);