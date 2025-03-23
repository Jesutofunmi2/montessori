import { bioDataAnswerSlice } from "./bioDataAnswerSlice";
import { avatarSlice } from "./avatarImageSlice";
import { userSlice } from "./userSlice";
import { stepSlice } from "./stepSlice";

export const rootReducer = {
    bioDataAnswerReducer: bioDataAnswerSlice.reducer,
    avatarSlice: avatarSlice.reducer,
    userSlice: userSlice.reducer,
    stepSlice: stepSlice.reducer
}