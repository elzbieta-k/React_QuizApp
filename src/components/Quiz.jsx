import { fetchQuestions } from "../hooks/quizApi";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useQuizStore from "../store/QuizStore";
import ProgressBar from "./ProgressBar";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Quiz() {
  //Getting state from QuizStore
  const {
    questions,
    score,
    selectedAnswer,
    isAnswered,
    setQuestions,
    currentQuestionIndex,
    selectAnswer,
    nextQuestion,
    resetQuiz,
  } = useQuizStore();

  
  const { state } = useLocation();
  const { category, amount, difficulty, type, name } = state;

  const { isLoading, error, data } = useQuery({
    queryKey: ["questions", category, amount, difficulty, type],
    queryFn: () => fetchQuestions({ category, amount, difficulty, type }),
  });

  useEffect(() => {
    if (data) {
      const decoded = data?.map((q) => ({
        ...q,
        category: atob(q.category),
        difficulty: atob(q.difficulty),
        type: atob(q.type),
        question: atob(q.question),
        answers: [
          atob(q.correct_answer),
          ...q.incorrect_answers.map((a) => atob(a)),
        ].sort(() => Math.random() - 0.5),
        correct_answer: atob(q.correct_answer),
      }));
      resetQuiz();
      setQuestions(decoded);
    }
  }, [data, setQuestions, resetQuiz]);

  const currentQuestion = questions?.[currentQuestionIndex];
  const quizInfo = questions?.[0];

  const [results, setResults] = useLocalStorage("quizResults", []);
  const [isSaved, setIsSaved] = useState(false);
  const handleSaveResults = () => {
    const newResult = {
      name,
      score,
      amount,
      category: quizInfo?.category,
      difficulty,
      type,
      date: new Date().toISOString(),
    };
    setResults((prev) => [...prev, newResult]);
    setIsSaved((prev) => !prev);
  };

  return (
    <section className="h-[85vh]  lg:w-4xl flex flex-col items-center font-raleway mx-auto lg:pt-20">
      {isLoading ? (
        <p className="text-white">Loading...</p>
      ) : error ? (
        <p className="text-red-500">Something went wrong!</p>
      ) : questions.length === 0 ? (
        <p className="text-white">No questions found.</p>
      ) : currentQuestion ? (
        <div className="flex flex-col items-center ">
          <p className="text-white pb-3 text-left">YOUR SCORE: {score}</p>
          <ProgressBar progress={(currentQuestionIndex / amount) * 100} />
          <p className="text-white text-center pt-2">
            Question: {currentQuestionIndex + 1} / {amount}
          </p>
          <div className="bg-white w-[90vw] lg:w-4xl rounded-xl flex flex-col items-center g-2 pt-5 pb-10 pl-5 pr-5 mt-5 lg:pb-15">
            <p>{currentQuestion.category}</p>
            <p className="p-3 pb-5 font-bold text-center">
              {currentQuestion.question}
            </p>
            <div className="flex flex-col w-full items-center md:flex-row ">
              {currentQuestion.answers.map((answer, i) => {
                let btnStyle =
                  " border-none shadow-border p-2 rounded-xl w-[90%] md:w-[24%] md:mx-auto md:justify-center md:min-h-[56px] m-1 cursor-pointer";

                if (isAnswered) {
                  if (answer === currentQuestion.correct_answer) {
                    btnStyle += " bg-green text-white font-bold";
                  } else if (answer === selectedAnswer) {
                    btnStyle += " bg-red text-white font-bold";
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => !isAnswered && selectAnswer(answer)}
                    className={btnStyle}
                    disabled={isAnswered}
                  >
                    {answer}
                  </button>
                );
              })}
            </div>
          </div>
          {isAnswered && (
            <button
              className="bg-purple text-white rounded-2xl w-full sm:w-80 mx-auto p-2 font-bold mt-5 cursor-pointer"
              onClick={nextQuestion}
            >
              Next
            </button>
          )}
        </div>
      ) : (
        <div className="font-raleway flex flex-col items-center">
          <div className="bg-white border-4 border-darkgreen border-double rounded-full w-30 h-30 flex flex-col justify-center items-center">
            <p>Your score</p>
            <p>{Math.floor((score / amount) * 100)}%</p>
          </div>
          <div className="text-white flex flex-col items-center pt-5">
            <p className="">Congratulations {name ? name : "Anonymous"}!</p>
            <p>
              Correct {score} out of {amount} questions
            </p>
            <p>Category: {quizInfo?.category}</p>
            <p>Difficulty: {difficulty}</p>
            <p>Type: {type}</p>
            <button
              className="bg-purple text-white rounded-2xl w-full sm:w-80 mx-auto p-2 font-bold mt-5 cursor-pointer"
              onClick={handleSaveResults}
            >
              {isSaved ? "Results saved" : "Save my results"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
