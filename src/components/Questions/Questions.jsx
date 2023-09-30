import useQuizContext from "../../hook/useQuizContext";

import Options from "../Options/Options";
import "./Questions.css";

const Questions = () => {
  const [quizStep, dispatch] = useQuizContext();
  const currentQuestion = quizStep.questions[quizStep.currentQuestion];

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };
  const onSelectedOption = (options) => {
    dispatch({
      type: "CHECK_QUESTION",
      payload: { answer: currentQuestion.answer, options }
    });
  }
  return (
    <div id="questions">
      <p>Perguntas {quizStep.currentQuestion + 1} de {quizStep.questions.length} </p>
      <h2 id="questions-title">{currentQuestion.question}</h2>
      <div id="options">
        {currentQuestion.options.map((options) => (
          <Options option={options} key={options} answer={currentQuestion.answer} selectedOption={() => onSelectedOption(options)} hide={quizStep.optionToHide === options ? 'hide' : null} />
        ))}
      </div>
      {!quizStep.answerSelected && !quizStep.help && (
        <>
          <button id="delete" onClick={() => dispatch({ type: "REMOVE_OPTION" })}>
            Excluir uma
          </button>
          <button id="tip" onClick={() => dispatch({ type: "SHOW_HELP" })}>Dica</button>
        </>
      )}
      {!quizStep.answerSelected && quizStep.help === "help" && (
        <p id="tip-text">Dica : {currentQuestion.tip}</p>
      )}
      {quizStep.answerSelected && (<button onClick={handleNextQuestion}>Continuar</button>)}
    </div>
  )
}

export default Questions;
