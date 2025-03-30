import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  message: string;
}

const initialState: GameState = {
  message: "",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    resetMessage: (state )=> {
        state.message = "";
    }
  },
});

export const { setMessage, resetMessage } = gameSlice.actions;
export default gameSlice.reducer;
