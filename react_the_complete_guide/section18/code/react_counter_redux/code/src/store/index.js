import { configureStore, createSlice} from '@reduxjs/toolkit';

// Reducer function provides new state snapshot

const initialCounterState = {
    counter: 0,
    showCounter: true
};

const initialAuthState = {
    isAuthenticated: false
};

// note: NEVER MUTATE STATE, NEVER CHANGE IT
// always override by returning new
// objects are reference values
// potentially more complex apps can get out of sync
// deepcopy objects where necessary

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


const authSlice = createSlice({
    name: "authentication",
    initialState:initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

// will create action objects for us
//   don't have to worry about identifiers
//   Redux Toolkit will take care of this for us
// methods are called action creators
//  already have a type w/ a unique action identifier

//counterSlice.actions.toggleCounter

// create a store - Redux wants ONE function for the global state
// set a map of reducers
// configureStore will merge
// reducer: {}
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;