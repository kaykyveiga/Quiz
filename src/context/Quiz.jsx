import { createContext, useReducer } from "react";
import questions from "../data/startQuestion";

const STEPS = ['initial', 'playing', 'end'];

const initialStep = {
    gameStep: STEPS[0],
    questions,
    currentQuestion: 0,
}

const quizReducer = (step, action) => {

    switch (action.type) {
        case "CHANGE_STEP":
            return {
                ...step,
                gameStep: STEPS[1],
            };
        case "REORDER_QUESTIONS":
            const reoderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            })
            return {
                ...step, questions: reoderedQuestions
            }
        case "NEXT_QUESTION":
            const nextQuestion = step.currentQuestion + 1;
            let end = false;
            if (!questions[nextQuestion]) {
                end = true;
            }
            return {
                ...step, currentQuestion: nextQuestion, gameStep: end ? STEPS[2] : step.gameStep,
            }

        default: return step;
    }
}


export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialStep);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}