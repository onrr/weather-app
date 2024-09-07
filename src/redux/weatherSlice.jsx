import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


export const getData = createAsyncThunk(
  "weather/getData",
  async (city) => {
    if (city !== "") {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
      );
      return response.data;
    } else {
      return ""
    }
  });

const initialState = {
  data: [],
  city: 'istanbul',
  standing: "idle"
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    search: (state, action) => {
      state.city = action.payload;
      state.standing = "idle"
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.standing = "pending"
    })
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload
      state.standing = "fulfilled"
    })
  }
})


export const { search } = weatherSlice.actions

export default weatherSlice.reducer