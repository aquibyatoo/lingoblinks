import { createBrowserRouter } from "react-router-dom";
import { Home } from "./screens/home";
import { WhatMakesUsDifferent } from "./screens/what-makes-us-different";
import { AboutUs } from "./screens/about-us";
import { ContactUs } from "./screens/contact-us";
import { SupportUs } from "./screens/support-us";
import { OurMission } from "./screens/our-misson";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/what-makes-us-different",
    element: <WhatMakesUsDifferent />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/mission",
    element: <OurMission />,
  },
  {
    path: "/support-us",
    element: <SupportUs />,
  },
]);
