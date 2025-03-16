import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
  progress: 0,
  totalSteps: 5,
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    previousStep: (state) => {
      if (state.step > 0) {
        state.step -= 1;
        state.progress = (state.step / (state.totalSteps - 1)) * 100;
      }
    },
    resetStep: (state) => {
      state.step = 0;
      state.progress = 0;
    },
  },
});

export const { previousStep, resetStep } = stepSlice.actions;
export default stepSlice.reducer;
