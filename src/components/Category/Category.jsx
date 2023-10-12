import { QuizContext } from "../../context/Quiz";
import { useContext } from "react";

import "./Category.css";
const Category = () => {
  const [quizStep, dispatch] = useContext(QuizContext);
  const reorderQuestions = (category) => {
    dispatch({ type: "START_GAME", payload: category })
    dispatch({ type: "REORDER_QUESTIONS" });
  };
  return (
    <div id="category">
      <h2>Escolha o assunto:</h2>
      <p>As perguntas serão direcionadas ao assunto escolido:</p>
      <div>
        {quizStep.questions.map((question) => (
          <button className="category-button" onClick={() => reorderQuestions(question.category)} key={question.category}>{question.category}</button>
        ))}
      </div>
    </div>
  )
}

export default Category