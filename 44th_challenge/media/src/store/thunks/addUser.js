import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { facer } from "@facer-js/facer";

export const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:3005/users", {
    name: facer.name.fullName(),
  });

  return response.data;
});