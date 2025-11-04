import { create } from "zustand";

const useQuizStore = create((set) => ({
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  selectedAnswer: null,
  isAnswered: false,

  setQuestions: (decodedQuestions) =>
    set({
      questions: decodedQuestions,
      currentQuestionIndex: 0,
      score: 0,
      selectedAnswer: null,
      isAnswered: false,
    }),

  selectAnswer: (answer) => {
    set((state) => {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      if (!currentQuestion) {
        return { selectedAnswer: answer, isAnswered: true };
      }
      const isCorrect = answer === currentQuestion.correct_answer;

      return {
        selectedAnswer: answer,
        isAnswered: true,
        score: isCorrect ? state.score + 1 : state.score,
      };
    });
  },

  incrementScore: () => set((state) => ({ score: state.score + 1 })),

  nextQuestion: () =>
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1,
      selectedAnswer: null,
      isAnswered: false,
    })),

  resetQuiz: () =>
    set({
      questions: [],
      currentQuestionIndex: 0,
      score: 0,
      selectedAnswer: null,
      isAnswered: false,
    }),
}));

export default useQuizStore;
