import { createSlice } from '@reduxjs/toolkit';

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState: {
    isDrawerOpen: true,
  },
  reducers: {
    setDrawerOpen: (state, action) => {
      state.isDrawerOpen = action.payload;
    },
  },
});

export const { setDrawerOpen } = drawerSlice.actions;

export default drawerSlice.reducer;
