import { createSlice } from "@reduxjs/toolkit";
export const EditprofileSlice = createSlice({
  name: "editprofile",
  initialState: [],
  reducers: {
    addProfile: (state, action) => {
      state.push(action.payload);
    },
    updateProfile: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    },
    deleteProfile:(state,action)=>{
     return [];
    }
  },
});

export default EditprofileSlice.reducer;
export const{addProfile,updateProfile,deleteProfile} = EditprofileSlice.actions;