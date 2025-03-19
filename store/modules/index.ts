import { bioDataAnswerSlice } from "./bioDataAnswerSlice";
import { avatarSlice } from "./avatarImageSlice";

export const rootReducer = {
    bioDataAnswerReducer: bioDataAnswerSlice.reducer,
    avatarSlice: avatarSlice.reducer,
}