import useQuizContext from "../../hook/useQuizContext";

const GameOver = () => {
    const [quizStep, dispatch] = useQuizContext();
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