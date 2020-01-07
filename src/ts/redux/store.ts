import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { hogeReducer } from "./hoge";
import { fugaReducer } from "./fuga";
import { piyoReducer } from "./piyo";

const rootReducer = combineReducers({
  hoge: hogeReducer,
  fuga: fugaReducer,
  piyo: piyoReducer
});

export type Store = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer
});
