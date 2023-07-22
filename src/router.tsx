import { createBrowserRouter } from "react-router-dom";
import { Home } from "./screens/home";
import { WhatMakesUsDifferent } from "./screens/what-makes-us-different";
import { AboutUs } from "./screens/about-us";
import { ContactUs } from "./screens/contact-us";
import { SupportUs } from "./screens/support-us";
import { OurMission } from "./screens/our-mission";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/our-difference",
    element: <WhatMakesUsDifferent />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/mission",
    element: <OurMission />,
  },
  {
    path: "/support",
    element: <SupportUs />,
  },
]);
