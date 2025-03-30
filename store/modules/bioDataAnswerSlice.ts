import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnswerState {
  answers: { [key: number]: string };
  step: number;
  progress: number;
  totalQuestions: number
}

const initialState: AnswerState = {
  answers: {},
  step: 0,
  progress: 0,
  totalQuestions: 0
};

export const bioDataAnswerSlice = createSlice({
    name: "answers",
    initialState,
    reducers: {
      setAnswer: (state, action: PayloadAction<{ step: number; answer: string, totalQuestions: number}>) => {
        state.answers[action.payload.step] = action.payload.answer;
        const totalQuestions = action.payload.totalQuestions;
        const nextStep = state.step + 1;

        state.progress = ((nextStep) / totalQuestions) * 100;
  
        if (state.step < totalQuestions - 1) {
            state.step = nextStep;
        } else {
          state.progress = 100;
        }
      },
      goBack: (state, action: PayloadAction<{totalQuestions: number}>) => {
        if (state.step > 0) {
          state.step -= 1;
          const totalQuestions = action.payload.totalQuestions;
          state.progress = ((state.step + 1) / totalQuestions) * 100;
        }
      },
      resetAnswers: (state) => {
        state.answers = {};
        state.step = 0;
        state.progress = 0;
      },
    },
  });
  
  export const { setAnswer, goBack, resetAnswers } = bioDataAnswerSlice.actions;
  