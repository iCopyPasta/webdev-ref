import React from 'react';

// app or component-wide state
// return: an object that contains a component
const AuthContext = React.createContext({
    isLoggedIn: false
});

export default AuthContext;
