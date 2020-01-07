import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  text: string;
};

export type ChangeAnyPayload = PayloadAction<string>;

const hogeSlice = createSlice({
  name: "hoge",
  initialState: {
    text: "foo"
  } as State,
  reducers: {
    changeFoo: (state): State => {
      return { ...state, text: "foo" };
    },
    changeBar: (state): State => {
      return { ...state, text: "bar" };
    },
    changeBaz: (state): State => {
      return { ...state, text: "baz" };
    },
    changeAny: (state, { payload }: ChangeAnyPayload): State => {
      return {
        ...state,
        text: payload || "please input!"
      };
    }
  }
});

export const hogeActions = hogeSlice.actions;
export const hogeReducer = hogeSlice.reducer;
