import Quiz from "../images/Quiz.png"

const Start = () => {
    return (
        <div>
            <h2>Quiz sobre conhecimentos diversos</h2>
            <h3>Seja bem-vindo</h3>
            <img src={Quiz} alt="question image" />
            <p>Clique no botão abaixo para começar. Divirta-se</p>
            <button>Começar</button>
        </div>
    )
}

export default Start