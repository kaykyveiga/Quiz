import { QuizContext } from "../context/Quiz";
import { useContext } from "react";

import "./Questions.css"

const Questions = () => {
  const [quizStep, dispatch] = useContext(QuizContext);
  const currentQuestion = quizStep.questions[quizStep.currentQuestion]

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  }

  return (
    <div id="questions">
      <p>Perguntas {quizStep.currentQuestion + 1} de {quizStep.questions.length} </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options">
        <p>Opções</p>
      </div>
      <button onClick={handleNextQuestion}>Continuar</button>
    </div>
  )
}

export default Questions;
