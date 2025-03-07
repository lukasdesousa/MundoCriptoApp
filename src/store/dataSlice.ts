import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SetVisibility } from "../pages/App/Analyser/utils/VerifyButtonVisibility";

interface DataState {
  data: Record<string, any> | null; // Pode ser um objeto genérico
  isVisible: boolean;
  loading: boolean;
}

const initialState: DataState = {
  data: {
    token: 'Nome do token'
  },
  isVisible: false,
  loading: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Record<string, any>>) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    showDeepResults: (state) => {
      state.isVisible = true;
    },
    hideDeepResults: (state) => {
      state.isVisible = false;
    }
  },
});

export const { setData, showDeepResults, hideDeepResults, setLoading } = dataSlice.actions;
export default dataSlice.reducer;
