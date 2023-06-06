const redux = require('redux');

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
const store = redux.createStore(counterReducer);

// see initial state
console.log("initial: ", store.getState());

// Subscriber
const counterSubscriber = () =>{
    const latestState = store.getState();
    console.log(latestState);
};

// Component can subscribe
store.subscribe(counterSubscriber);

// Dispatch - unique strings
store.dispatch({type: "INCREMENT"});
store.dispatch({type: "DECREMENT"});