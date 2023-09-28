
import { QuizContext } from "../context/Quiz";
import { useContext } from "react";

import "./Options.css"

const Options = ({option , selectedOption, answer}) => {
    const [quizStep, dispatch] = useContext(QuizContext);
  return (
    <div>
        <p onClick={selectedOption} className={`options ${quizStep.answerSelected && option === answer ? 'correct' : ''} ${quizStep.answerSelected && option === quizStep.answerSelected && option !== answer ? 'wrong' : ''}`}>{option}</p>

    </div>
  )
}

export default Options