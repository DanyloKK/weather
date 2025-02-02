import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {apiKey} from "../cityLocations.js";

const weatherSlicer = createSlice({
    name: "weather",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInfo.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchInfo.fulfilled, (state, action) => {
                state.data = [];
                state.isLoading = false;
                state.data.push(action.payload);
            })
            .addCase(fetchInfo.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchInitialInfo.pending,(state,action)=>{
                state.isLoading = true;
            })
            .addCase(fetchInitialInfo.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.data = [];
                state.data.push(action.payload);
            })
            .addCase(fetchInitialInfo.rejected,(state,action)=>{
                state.isLoading = false;
                state.error = action.payload;
            });
    },
})
export const fetchInitialInfo = createAsyncThunk(
    "weather/fetchInitialInfo",
    async (cityName, {rejectWithValue}) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
            );

            if (!response.ok) {
                return rejectWithValue("City not found");
            }

            const datas = await response.json();
            return datas;  // Возвращаем данные
        } catch (error) {
            return rejectWithValue("An error occurred");
        }
    }
)
export const fetchInfo = createAsyncThunk(
    "weather/fetchData",
    async (cityName, {rejectWithValue}) => {
        try {
            const encodedCityName = encodeURIComponent(cityName);
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${encodedCityName}&appid=${apiKey}`
            );

            if (!response.ok) {
                return rejectWithValue("City not found");
            }

            const datas = await response.json();
            return datas;  // Возвращаем данные
        } catch (error) {
            return rejectWithValue("An error occurred");
        }
    }
)
export default weatherSlicer