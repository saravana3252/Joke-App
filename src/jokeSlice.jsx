import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const FetchJoke = createAsyncThunk(
  "jokes/jokescategory",
  (category, { rejectWithValue }) => {
    return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid category or request failed.");
        }
        return res.json();
      })
      .then((data) => {
        if (!data.value) {
          throw new Error("No joke found for the selected category.");
        }
        return data.value; 
      })
      .catch((err) => {
        return rejectWithValue(err.message);
      });
  }
);


const initialState = {
  joke: "Available joke categories: [ animal, career, celebrity, dev, explicit, fashion, food, history, money, movie, music, political, religion, science, sport, travel ]",
  loading: false,
  error: null,
};


const jokeSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchJoke.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(FetchJoke.fulfilled, (state, action) => {
        state.loading = false;
        state.joke = action.payload; 
      })
      .addCase(FetchJoke.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      });
  },
});


export default jokeSlice;
export { FetchJoke };
