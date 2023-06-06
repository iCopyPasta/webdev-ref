import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';



// will create action objects for us
//   don't have to worry about identifiers
//   Redux Toolkit will take care of this for us
// methods are called action creators
//  already have a type w/ a unique action identifier

//counterReducer.actions.toggleCounter

// create a store - Redux wants ONE function for the global state
// set a map of reducers
// configureStore will merge
// reducer: {}
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export default store;