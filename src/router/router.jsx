import { createBrowserRouter } from "react-router-dom";

// routes
import HomePage from "../pages/HomePage.jsx";
import Scoreboard from "../pages/Scoreboard.jsx";
import App from "../App.jsx";
import Quiz from "../pages/Quiz.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Error</p>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
      {
        path: "scoreboard",
        element: <Scoreboard />,
      },
    ],
  },
  {
    path: "*",
    element: <p>Error</p>,
  },
]);

export default router;
