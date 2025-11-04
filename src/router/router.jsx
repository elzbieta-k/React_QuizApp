import { createHashRouter } from "react-router-dom";

// routes
import HomePage from "../pages/HomePage.jsx";
import ScoreboardPage from "../pages/ScoreboardPage.jsx";
import App from "../App.jsx";
import Quiz from "../pages/Quiz.jsx";

const router = createHashRouter([
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
        element: <ScoreboardPage />,
      },
    ],
  },
  {
    path: "*",
    element: <p>Error</p>,
  },
]);

export default router;
