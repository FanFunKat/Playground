import { configureStore, createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload)
    },
    removeMovie: (state, action) => {
      const index = state.indexOf(action.payload);
      state.splice(index, 1)
    },
    reset(state, action) {
      return []; //mutate existing state
    },
  },
});

const songsSlice = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    //PATERN: 'song' + 'addSong' = 'song/addSong'
    addSong: (state, action) => {
      //STATE IS NOT THE BIG STATE OBJECT
      //IN THE STORE
      //IT IS THE PIECE OF STATE MANAGED
      //BY THIS REDUCER
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase('movie/reset', (state, action) => {
      return [];
    })

  }
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

// console.log(songsSlice.actions.addSong('some song'));
//action creators

// const startingState = store.getState();
// console.log('Starting state:', JSON.stringify(startingState));

// store.dispatch(
//   songsSlice.actions.addSong('Some song')
// )

// const endingState = store.getState();
// console.log('Ending state:', JSON.stringify(endingState));

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie, reset } = moviesSlice.actions;