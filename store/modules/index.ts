import { bioDataAnswerSlice } from "./bioDataAnswerSlice";
import { avatarSlice } from "./avatarImageSlice";
import { userSlice } from "./userSlice";
import { stepSlice } from "./stepSlice";
import { gameSlice } from "./gameSlice";

export const rootReducer = {
  bioDataAnswerReducer: bioDataAnswerSlice.reducer,
  avatarSlice: avatarSlice.reducer,
  userSlice: userSlice.reducer,
  stepSlice: stepSlice.reducer,
  gameSlice: gameSlice.reducer,
};
