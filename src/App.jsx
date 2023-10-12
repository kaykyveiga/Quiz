import { FaExclamationCircle, FaQuestionCircle } from 'react-icons/fa';
import { useContext } from "react";

import { QuizContext } from "./context/Quiz";

import Start from './components/Start/Start'
import Questions from './components/Questions/Questions';
import GameOver from './components/GameOver/GameOver';
import Category from './components/Category/Category';

import './App.css'

function App() {
  const [quizStep] = useContext(QuizContext);

  return (
    <div className="App">
      <span className='icons'>
        <FaQuestionCircle className='question-icon' />
        <FaExclamationCircle className='exclamation-icon' />
      </span>
      <h1 id='title'>Quiz</h1>
      <p id='subtitle'>Time</p>
      {quizStep.gameStep === "initial" && <Start />}
      {quizStep.gameStep === 'category' && <Category />}
      {quizStep.gameStep === "playing" && <Questions />}
      {quizStep.gameStep === "end" && <GameOver />}
    </div>
  )
}

export default App
