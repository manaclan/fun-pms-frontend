import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountryLanguageCurrencySlice {
  countryAndLanguage: string;
  currency: string;
}

const initialState: CountryLanguageCurrencySlice = {
  countryAndLanguage: "Việt Nam (Tiếng Việt)",
  currency: "VND",
};

export const countryLanguageCurrencySlice = createSlice({
  name: "countryLanguageCurrency",
  initialState,
  reducers: {
    changeCountryAndLanguage: (state, action: PayloadAction<string>) => {
      state.countryAndLanguage = action.payload;
    },
    changeCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
});

export const { changeCountryAndLanguage, changeCurrency } =
  countryLanguageCurrencySlice.actions;
// export const selectIsCollapsed = (state: any) => state.counter.isCollapsed;
export default countryLanguageCurrencySlice.reducer;
