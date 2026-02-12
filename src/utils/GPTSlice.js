import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
name: 'gpt',
initialState: {
    showGptSearch: false,
    movieResult: null,
    movieNames: null,
},

reducers:{
    toggleGptSearchView: (state, action) => {
        state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult:(state, action) => {
        state.movieNames = action.payload.movieNames;
        state.movieResult = action.payload.movieResult;
    },

},

});
export const {toggleGptSearchView, addGptMovieResult}=gptSlice.actions;
export default gptSlice.reducer;