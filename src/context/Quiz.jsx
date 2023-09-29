import { createContext, useReducer } from "react";
import questions from "../data/allQuestion";

const STEPS = ['initial', 'category', 'playing', 'end'];

const initialStep = {
    gameStep: STEPS[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
}

const quizReducer = (step, action) => {

    switch (action.type) {
        case "CHANGE_STEP":
            return {
                ...step,
                gameStep: STEPS[1],
            };
        case "START_GAME":
            let startQuestions = null;

            step.questions.forEach((question) => {
                if (question.category === action.payload) {
                    startQuestions = question.questions
                }
            })
            return {
                ...step,
                questions: startQuestions,
                gameStep: STEPS[2]
            }
            case "REORDER_QUESTIONS":
            
                    const reorderedQuestions = step.questions.sort(() => {
                        return Math.random() - 0.5;
                      });
               
          
                return {
                  ...step,
                  questions: reorderedQuestions,
                };
       
        case "NEXT_QUESTION":
            const nextQuestion = step.currentQuestion + 1;
            let end = false;
            if (!questions[nextQuestion]) {
                end = true;
            }
            return {
                ...step, currentQuestion: nextQuestion, gameStep: end ? STEPS[3] : step.gameStep, answerSelected: false
            }
        case "RESTART":
            return initialStep;

        case "CHECK_QUESTION":
            if (step.answerSelected) return step;

            const answer = action.payload.answer;
            const option = action.payload.options;
            let correctAnswer = 0;

            if (answer === option) correctAnswer = 1;
            return {
                ...step,
                score: step.score + correctAnswer,
                answerSelected: option,
            }

        default: return step;
    }
}


export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialStep);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}