
import { QuizContext } from "../context/Quiz";
import { useContext } from "react";

import "./Start.css"

const Start = () => {
    const [quizStep, dispatch] = useContext(QuizContext);
    
    const handleChangeStep = () => {
        dispatch({ type: "CHANGE_STEP" })
    }

    return (
        <div className="start">
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para começar.</p>
            <p> Divirta-se!</p>
            <button onClick={handleChangeStep}>Começar</button>
        </div>
    )
}

export default Start