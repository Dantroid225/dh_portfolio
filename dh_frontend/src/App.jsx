import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  LandingLayout,
  Landing,
  Register,
  Login,
  ProjectsLayout,
  Error,
  Projects,
  Hobbies,
  Resume,
  Contact,
  Admin,
  Profile,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dh",
        element: <ProjectsLayout />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "hobbies",
            element: <Hobbies />,
          },
          {
            path: "projects",
            element: <Projects />,
          },
          {
            path: "resume",
            element: <Resume />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);

import React from "react";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
