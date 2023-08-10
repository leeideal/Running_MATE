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

// const kalSlice = createSlice({
//     name:'kal',
//     initialState:0,
//     reducers : {
//         setKal: (statie,action) => action.playload,
//     }
// })

export const { setSpeed } = speedSlice.actions;
// export const { setKal } = kalSlice.actions;

export default configureStore({
    reducer: {
        timegoal: timegoal.reducer,
        speed: speedSlice.reducer,
        // kal: kalSlice.reducer,
    },

});

