import { QuizContext } from "../../context/Quiz";
import { useContext } from "react";

const GameOver = () => {
    const [quizStep, dispatch] = useContext(QuizContext);
    const handleRestart = () => {
        dispatch({ type: "RESTART" })
    }
    return (
        <div id="gameOver">
            <h2>Você chegou ao fim do jogo!</h2>
            <p>Sua pontuação: {quizStep.score}</p>
            <p>Você acertou {quizStep.score} de {quizStep.questions.length} perguntas</p>
            <button onClick={handleRestart}>Reniciar</button>
        </div>
    )
}

export default GameOver