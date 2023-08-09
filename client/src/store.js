import { configureStore, createSlice } from '@reduxjs/toolkit';

const timegoal = createSlice({
    name: 'timegoal',
    initialState : 60,
});

const speedSlice = createSlice({
  name:'speed',
  initialState:0,
  reducers : {
    setSpeed: (state, action) => action.payload,

  }
})

export const { setSpeed } = speedSlice.actions;


export default configureStore({
    reducer: {
        timegoal: timegoal.reducer,
        speed: speedSlice.reducer,
    },

});

