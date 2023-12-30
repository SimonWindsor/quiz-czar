import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    category: '',
    type: '',
    questions: {}
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    }
  }
});

export const { setCategory, setType, setQuestions } = quizSlice.actions;
export const selectCategory = (state) => state.quiz.category;
export const selectType = (state) => state.quiz.type;
export const selectQuestions = (state) => state.quiz.questions;
export default quizSlice.reducer;