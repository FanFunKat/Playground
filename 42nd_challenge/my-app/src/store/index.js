import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

const startingState = store.getState();
console.log('Starting state:', JSON.stringify(startingState));

store.dispatch({
  type: 'songs/addSong',
  payload: 'New Song!!!',
})

const endingState = store.getState();
console.log('Ending state:', JSON.stringify(endingState));