import { createSlice } from '@reduxjs/toolkit';

// Reducer function provides new state snapshot

const initialCounterState = {
    counter: 0,
    showCounter: true
};

// preparing "slice" of global state
// can keep separate statuses/slices
// names in reducer become important
const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            // can mutate state in here as 
            // Redux Toolkit give us a guarantee
            // to clone existing state
            // and give us new object
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        // 
        increase(state, action) {
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.showCounter = ! state.showCounter;
        }
    }
});
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;