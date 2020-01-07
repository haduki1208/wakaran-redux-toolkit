import { createSlice } from "@reduxjs/toolkit";
import { hogeActions, ChangeAnyPayload } from "../hoge";

type State = {
  text: string;
};

const piyoSlice = createSlice({
  name: "piyo",
  initialState: {
    text: "foo"
  } as State,
  reducers: {},
  extraReducers: {
    [hogeActions.changeFoo.type]: (state): State => {
      return { ...state, text: "foo" };
    },
    [hogeActions.changeBar.type]: (state): State => {
      return { ...state, text: "bar" };
    },
    [hogeActions.changeBaz.type]: (state): State => {
      return { ...state, text: "baz" };
    },
    [hogeActions.changeAny.type]: (
      state,
      { payload }: ChangeAnyPayload
    ): State => {
      return {
        ...state,
        text: payload || "please input!"
      };
    }
  }
});

export const piyoReducer = piyoSlice.reducer;
