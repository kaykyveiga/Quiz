import { QuizContext } from "../context/Quiz";
import { useContext } from "react";

import "./Questions.css"
import Options from "./Options";

const Questions = () => {
  const [quizStep, dispatch] = useContext(QuizContext);
  const currentQuestion = quizStep.questions[quizStep.currentQuestion]

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  }
  const onSelectedOption = (options) => {
    dispatch({
      type : "CHECK_QUESTION",
      payload: {answer:currentQuestion.answer, options}
     });
  }
  return (
    <div id="questions">
      <p>Perguntas {quizStep.currentQuestion + 1} de {quizStep.questions.length} </p>
      <h2 id="questions-title">{currentQuestion.question}</h2>
      <div id="options">
        {currentQuestion.options.map((options) => (
          <Options option={options} key={options} answer={currentQuestion.answer} selectedOption={() => onSelectedOption(options)} />
        ))}
      </div>
      {!quizStep.answerSelected && !quizStep.help &&(
        <button id="tip" onClick={() => dispatch({type : "SHOW_HELP"})}>Dica</button>
      )}
      {!quizStep.answerSelected && quizStep.help === "help" &&(
        <p id="tip-text">Dica : {currentQuestion.tip}</p>
      )}
     {quizStep.answerSelected && ( <button onClick={handleNextQuestion}>Continuar</button>)} 
    </div>
  )
}

export default Questions;
