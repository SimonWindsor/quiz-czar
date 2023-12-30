import React from "react";
import { useDispatch } from 'react-redux';
import { setGameStage, togglePopUp } from "../../features/game/gameSlice";
import { setCategory, setType } from "../../features/quiz/quizSlice.js";

export function QuizOptionSelector() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Select Quiz Options</h2>
      <label htmlFor="category">
        Category:
      </label>
      <select id="category" onChange={(e) => dispatch(setCategory(e.target.value))}>
        <option value="">Any Category</option>
        <option value="9">General Knowledge</option>
        <option value="10">Entertainment: Books</option>
        <option value="11">Entertainment: Film</option>
        <option value="12">Entertainment: Music</option>
        <option value="13">Entertainment: Musicals &amp; Theatres</option>
        <option value="14">Entertainment: Television</option>
        <option value="15">Entertainment: Video Games</option>
        <option value="16">Entertainment: Board Games</option>
        <option value="17">Science &amp; Nature</option>
        <option value="18">Science: Computers</option>
        <option value="19">Science: Mathematics</option>
        <option value="20">Mythology</option>
        <option value="21">Sports</option>
        <option value="22">Geography</option>
        <option value="23">History</option>
        <option value="24">Politics</option>
        <option value="25">Art</option>
        <option value="26">Celebrities</option>
        <option value="27">Animals</option>
        <option value="28">Vehicles</option>
        <option value="29">Entertainment: Comics</option>
        <option value="30">Science: Gadgets</option>
        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
        <option value="32">Entertainment: Cartoon &amp; Animations</option>
			</select>
      <label htmlFor="type">
        Type:
      </label>
      <select id="type" onChange={(e) => dispatch(setType(e.target.value))}>
        <option value="">Any</option>
        <option value="multiple">Multiple Choice</option>
        <option value="boolean">True or False</option>
      </select>
      <button
        className="exit-btn"
        aria-label="Exit Button"
        onClick={() => dispatch(togglePopUp())}
      >
        EXIT
      </button>
      <button
        className="green-btn"
        aria-label="Start Quiz"
        onClick={() => dispatch(setGameStage('selecting-quiz'))}
      >
        START QUIZ
      </button>
    </div>
  )
}