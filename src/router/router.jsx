import { createHashRouter } from "react-router-dom";

// routes
import HomePage from "../pages/HomePage.jsx";
import ScoreboardPage from "../pages/ScoreboardPage.jsx";
import App from "../App.jsx";
import QuizPage from "../pages/QuizPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "quiz",
        element: <QuizPage />,
      },
      {
        path: "scoreboard",
        element: <ScoreboardPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
