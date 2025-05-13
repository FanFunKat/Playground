import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';
import { addUser } from '../thunks/addUser';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (stste, action) => {
      stste.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (stste, action) => {
      stste.isLoading = false;
      stste.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (stste, action) => {
      stste.isLoading = false;
      stste.error = action.error;
    });

    builder.addCase(addUser.pending, (stste, action) => {
      stste.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (stste, action) => {
      stste.isLoading = false;
      stste.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (stste, action) => {
      stste.isLoading = false;
      stste.error = action.error;
    });
  }
});

export const usersReducer = userSlice.reducer;