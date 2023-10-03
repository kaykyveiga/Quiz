import useQuizContext from "../../hook/useQuizContext";

import "./GameOver.css"

const GameOver = () => {
    const [quizStep, dispatch] = useQuizContext();
    const handleRestart = () => {
        dispatch({ type: "RESTART" })
    }

    let classification = null;
    switch (true) {
        case quizStep.score >= 85: classification = "Excelente"; break;
        case quizStep.score >= 70: classification = "Boa"; break;
        case quizStep.score >= 50: classification = "Regular"; break;
        default: classification = "Nessita de Melhoria"
    }
    return (
        <div id="gameOver">
            <h2>Você chegou ao fim do jogo!</h2>
            <p className="gameOver-paragraph">Sua classificação foi: {classification}!</p>
            <p className="gameOver-paragraph">Você acertou {quizStep.score} % das {quizStep.questions.length} perguntas.</p>
            <button onClick={handleRestart}>Reniciar</button>
        </div>
    )
}

export default GameOver