import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  setGameStage,
  setNumQuestions, 
  setDifficulty,
  setCategory,
  setType,
  selectNumQuestions,
  selectDifficulty,
  selectCategory,
  selectType
} from '../../features/game/gameSlice.js';
import { getQuestions } from '../../features/quiz/quizSlice.js'
import { setPopUpType } from "../../features/popUp/popUpSlice.js";

import './GameCreator.css';

export function GameCreator() {
  const dispatch = useDispatch();

  const numQuestions = useSelector(selectNumQuestions);
  const difficulty = useSelector(selectDifficulty);
  const category = useSelector(selectCategory);
  const type = useSelector(selectType);

  return ( 
    <div id="game-creator">
      <h2>Start a Game</h2>
      <div>
        <label htmlFor="num-questions">
          Number of Questions:
        </label>
          <input
            id="num-questions"
            type="number"
            min="1"
            max="50"
            step="1"
            value={numQuestions}
            onChange={(e) => dispatch(setNumQuestions(e.target.value))}
          />
      </div>
      <div>
        <label htmlFor="difficulty">
          Difficulty:
        </label>
        <select id="difficulty" onChange={(e) => dispatch(setDifficulty(e.target.value))}>
          <option value="">Any</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div>
        <label htmlFor="category">
          Category:
        </label>
        <select id="category" onChange={(e) => dispatch(setCategory(e.target.value))}>
          <option value="">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Books</option>
          <option value="11">Film</option>
          <option value="12">Music</option>
          <option value="13">Musicals &amp; Theatres</option>
          <option value="14">Television</option>
          <option value="15">Video Games</option>
          <option value="16">Board Games</option>
          <option value="29">Comics</option>
          <option value="31">Japanese Anime &amp; Manga</option>
          <option value="32">Cartoon &amp; Animations</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Computers</option>
          <option value="19">Mathematics</option>
          <option value="30">Gadgets</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
        </select>
      </div>
      <div>
        <label htmlFor="type">
          Type:
        </label>
        <select id="type" onChange={(e) => dispatch(setType(e.target.value))}>
          <option value="">Any</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True or False</option>
        </select>
      </div>
      <span id="control-btns">
        <button
          aria-label="Play Button"
          // async/await are used so that quiz will not begin unless question acquisition is complete
          onClick={async () => {
            await dispatch(getQuestions({ numQuestions, difficulty, category, type }));
            dispatch(setGameStage('playing-quiz'));
          }}
        >
          PLAY
        </button>
        <button
          aria-label="Exit Button"
          onClick={() => {
            dispatch(setPopUpType('exit'))
          }}
        >
          EXIT
        </button>
      </span>
    </div>
  );
}