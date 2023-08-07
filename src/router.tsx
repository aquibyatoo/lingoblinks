import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "./screens/home";
import { AboutScreen } from "./screens/about";
import { OurDifferenceScreen } from "./screens/our-difference";
import { SupportUsScreen } from "./screens/support";
import { OurMissionScreen } from "./screens/our-mission";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/about",
    element: <AboutScreen />,
  },
  {
    path: "/our-difference",
    element: <OurDifferenceScreen />,
  },
  {
    path: "/support-us",
    element: <SupportUsScreen />,
  },
  {
    path: "our-mission",
    element: <OurMissionScreen />,
  },
]);
