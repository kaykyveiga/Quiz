import useQuizContext from "../../hook/useQuizContext";
import "./Options.css";

const Options = ({ option, selectedOption, answer, hide }) => {
  const [quizStep] = useQuizContext();
  return (
    <div>
      <p onClick={selectedOption} className={`options ${quizStep.answerSelected && option === answer ? 'correct' : ''} ${quizStep.answerSelected && option === quizStep.answerSelected && option !== answer ? 'wrong' : ''} ${hide ? 'hide' : ''}`}>{option}</p>
    </div>
  )
}

export default Options