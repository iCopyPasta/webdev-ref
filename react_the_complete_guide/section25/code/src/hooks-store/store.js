import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
// actions that can be dispatched
let actions = [];

// create your own React Hook
// defined outside of hook - not created separately
export const useStore = () => {
    const setState = useState(globalState)[1];

    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload)
        globalState = { ...globalState, ...newState};

        for ( const listener of listeners ) {
            listener(globalState);
        };
    };

    useEffect(() => {
        listeners.push(setState);

        return () => {
            listeners = listeners.filter(li => li !== setState);
        };

    }, [setState]);

    return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
    if(initialState) {
        globalState = {...globalState, ...initialState};
    }

    actions = {...actions, ...userActions};
};