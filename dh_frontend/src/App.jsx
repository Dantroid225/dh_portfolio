import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ProjectsLayout,
  Error,
  Projects,
  Interests,
  Resume,
  Contact,
  Profile,
  Landing,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectsLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "interests",
        element: <Interests />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "landing",
        element: <Landing />,
      },
    ],
  },
]);

import React from "react";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
