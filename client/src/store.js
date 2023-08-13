import { configureStore, createSlice } from '@reduxjs/toolkit';

const timegoal = createSlice({
    name: 'timegoal',
    initialState : 60,
});

const distancegoal = createSlice({
  name:'distance',
  initialState : 0.2,//단위:km
})

const speedSlice = createSlice({
  name:'speed',
  initialState:0.2,
  reducers : {
    setSpeed: (state, action) => action.payload,
  },
});

const kalSlice = createSlice({
    name:'kal',
    initialState:0,
    reducers : {
        setKal: (state, action) => {
          return action.playload;
        },
    }
})

const timeSlice = createSlice({
  name: 'time',
  initialState: 0,
  reducers: {
      setTime: (state, action) => action.payload,
  },
});

export const { setSpeed } = speedSlice.actions;
export const { setKal } = kalSlice.actions;
export const { setTime } = timeSlice.actions;


export default configureStore({
    reducer: {
        timegoal: timegoal.reducer,
        distancegoal:distancegoal.reducer,
        speed: speedSlice.reducer,
        kal: kalSlice.reducer,
        time: timeSlice.reducer, 
    },

});

