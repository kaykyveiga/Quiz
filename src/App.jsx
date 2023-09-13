import { FaExclamationCircle, FaQuestionCircle } from 'react-icons/fa';
import './App.css'
import Start from './components/Start'

function App() {

  return (
    <div className="App">
      <span className='icons'>
        <FaQuestionCircle className='question-icon' />
        <FaExclamationCircle className='exclamation-icon' />
      </span>
      <h1 id='title'>Quiz</h1>
      <p id='subtitle'>Time</p>
      <Start />
    </div>
  )
}

export default App
