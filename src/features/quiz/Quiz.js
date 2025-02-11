import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectNumQuestions } from "../../features/game/gameSlice";
import { increaseScore, selectQuestions, selectCurrentQuestion } from './quizSlice.js';
import { setPopUpType } from "../popUp/popUpSlice.js";
import './Quiz.css'

// THe playable quiz part of the app.
export function Quiz() {
  const questions = useSelector(selectQuestions);
  const currentQuestion = useSelector(selectCurrentQuestion);
  const totalQuestions = useSelector(selectNumQuestions);

  const question = questions[currentQuestion];

  const dispatch = useDispatch();

  // Decode HTML entities using a textarea
  const decode = (text) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  };

  // Handles the displaying of possible answers to a trivia question.
  const showAnswerOptions = () => {
    // Put correnct and incorrect answers together in an array.
    const answers = [...question.incorrect_answers];
    answers.push(question.correct_answer);

    // New array for storing shuffled answers.
    const reorderedAnswers = [];

    // Randomise order of answers so correct answer is not on the end all the time.
    while (answers.length > 0) {
      const remove = Math.floor(Math.random() * answers.length);
      reorderedAnswers.push(answers[remove]);
      answers.splice(remove, 1);
    }

    // Display shuffled array of answers as buttons to select.
    return reorderedAnswers.map(answer => {
      return (
        <button
          key={decode(answer)}
          className="answer-btn"
          aria-label={decode(answer)}
          onClick={() => handleAnswer(answer)}
        >
          {decode(answer)}
        </button>
      )
    });
  }

  // Determines outcome after an answer has been selected.
  const handleAnswer = (answer) => {
    if (answer === question.correct_answer) {
      dispatch(increaseScore());
      dispatch(setPopUpType('correct'));
    } else {
      dispatch(setPopUpType('incorrect'));
    }
  }

  return (
    <div id="quiz">
      <h2 id="question">{`Question ${currentQuestion + 1}: ${decode(question.question)}`}</h2>
      <div id="answers">{showAnswerOptions()}</div>
      <span id="progress-and-exit">
        <div id="progress">
          <h3>{`Current Question: ${currentQuestion + 1}/${totalQuestions}`}</h3>
        </div>
        <button
          className="exit-btn"
          aria-label="Exit Button"
          onClick={() => {
            dispatch(setPopUpType('exit'));
          }}
        >
          EXIT
        </button>
      </span>
    </div>
  )
}
