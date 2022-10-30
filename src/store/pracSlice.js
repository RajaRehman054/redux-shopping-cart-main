const { createSlice } = require("@reduxjs/toolkit");

const pracSlice = createSlice({
  name: "prac",
  initialState: { num: 0, array: [] },
  reducers: {
    add(state, action) {
      state.num += 1;
      state.array.unshift(action.payload);
    },
    removeArray(state, action) {
      const numbers = state.array;
      const target = action.payload;
      var i = 0;
      while (i < numbers.length) {
        if (numbers[i] === target) {
          numbers.splice(i, 1);
        } else {
          ++i;
        }
      }
      state.array = numbers;
    },
  },
});

export const { add, removeArray } = pracSlice.actions;
export default pracSlice.reducer;
