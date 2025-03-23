import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    hasSeenOnboarding: boolean;
}

 const initialState: UserState = {
    hasSeenOnboarding: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setHasSeenOnboarding: (state, action: PayloadAction<boolean>) => {
            state.hasSeenOnboarding = action.payload;
        },
    },
});

export const { setHasSeenOnboarding } = userSlice.actions;
