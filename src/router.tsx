import { createBrowserRouter } from "react-router-dom";
import { Home } from "./screens/home";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
