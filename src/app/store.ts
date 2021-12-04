import { configureStore } from "@reduxjs/toolkit";
import siderReducer from "../Sider/SiderSlice";
import countryLanguageCurrencyReducer from "../Header/CountryLanguageCurrencyButton/CountryLanguageCurrencyButtonSlice";

export const store = configureStore({
  reducer: {
    sider: siderReducer,
    headerCountryLanguageCurrencyButton: countryLanguageCurrencyReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
