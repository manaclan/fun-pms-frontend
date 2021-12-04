import { createSlice } from "@reduxjs/toolkit";

interface SiderSlice {
  isCollapsed: boolean;
}

const initialState: SiderSlice = {
  isCollapsed: true,
};

export const siderSlice = createSlice({
  name: "sider",
  initialState,
  reducers: {
    collapse: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { collapse } = siderSlice.actions;
export const selectIsCollapsed = (state: any) => state.counter.isCollapsed;
export default siderSlice.reducer;
