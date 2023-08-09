import { configureStore, createSlice } from '@reduxjs/toolkit';

const timegoal = createSlice({
    name: 'timegoal',
    initialState : 60,
});

const speed = createSlice({
  name:'speed',
  initialState:200
})

export default configureStore({
    reducer: {
        timegoal: timegoal.reducer,
        speed: speed.reducer,
    },

});

