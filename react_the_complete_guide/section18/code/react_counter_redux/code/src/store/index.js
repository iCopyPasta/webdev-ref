import {createStore} from 'redux';

// Reducer function provides new state snapshot

const initalState = {
    counter: 0
};

const counterReducer = (state = initalState, action) => {
    // actions
    if (action.type === "DECREMENT"){
        return {
            counter: state.counter - 1
        };
    }

    if (action.type === "INCREMENT"){
        return {
            counter: state.counter + 1
        };
    }

    return state;
};

// create a store
const store = createStore(counterReducer);

export default store;