import { Avatar } from "@/constants/Slides";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AvatarState {
  selectedAvatar: Avatar | null;
}

const initialState: AvatarState = {
  selectedAvatar: null,
};

export const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    setSelectedAvatar: (state, action: PayloadAction<Avatar>) => {
      state.selectedAvatar = action.payload;
    },
  },
});

export const { setSelectedAvatar } = avatarSlice.actions;
