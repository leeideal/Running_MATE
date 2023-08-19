import { configureStore, createSlice } from '@reduxjs/toolkit';

const timegoalSlice = createSlice({
  name: 'timegoal',
  initialState: 60,
  reducers: {
    setTimegoal: (state, action) => action.payload,
  },
});

const coinSlice = createSlice({
  name:'coin',
  initialState: 0, 
  reducers: {
    setCoin : (state, action) => action.payload,
  },
})

const distancegoalSlice = createSlice({
  name: 'distancegoal',
  initialState: 0.2, // 단위: km
  reducers: {
    setDistancegoal: (state, action) => action.payload,
  },
});

const speedSlice = createSlice({
  name: 'speed',
  initialState: 0.2,
  reducers: {
    setSpeed: (state, action) => action.payload,
  },
});

const kalSlice = createSlice({
  name: 'kal',
  initialState: 0,
  reducers: {
    setKal: (state, action) => action.payload,
  },
});

const timeSlice = createSlice({
  name: 'time',
  initialState: 0,
  reducers: {
    setTime: (state, action) => action.payload,
  },
});

const distanceSlice = createSlice({
  name: 'distance',
  initialState: 0,
  reducers: {
    setDistance: (state, action) => action.payload,
  },
});

export const { setSpeed } = speedSlice.actions;
export const { setKal } = kalSlice.actions;
export const { setTime } = timeSlice.actions;
export const { setDistance } = distanceSlice.actions;
export const { setTimegoal } = timegoalSlice.actions;
export const { setDistancegoal } = distancegoalSlice.actions;
export const { setCoin } = coinSlice.actions;

export default configureStore({
  reducer: {
    timegoal: timegoalSlice.reducer,
    distancegoal: distancegoalSlice.reducer,
    speed: speedSlice.reducer,
    kal: kalSlice.reducer,
    time: timeSlice.reducer,
    distance: distanceSlice.reducer,
    coin: coinSlice.reducer,
  },
});
