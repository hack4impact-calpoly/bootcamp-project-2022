import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AboutMe from './components/AboutMe/AboutMe';
import Homepage from './components/Homepage/Homepage';
import { RecipePage } from './RecipePage/RecipePage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // default
        path: "/",
        element: <Homepage />,
      },
      {
        path: '/about',
        element: <AboutMe />,
      },
      {
        path: '/recipe/:recipeName',
        element: <RecipePage />,
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
