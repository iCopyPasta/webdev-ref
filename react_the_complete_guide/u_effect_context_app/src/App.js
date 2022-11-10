import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {

    // for javascript, would be data lost 
    // but how about persisting state on reload? 
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // infinite loop
    // why?
    // get storage data as "1"
    // set to true - initial is false
    // calls to re-evaluate/re-execute this
    // repeat
    // if (storedUserLoggedInInfo === '1') {
    //     // triggers function to be re-ran
    //     // this overall anon function will not run again
    //     // because the dependencies didn't change
    //     setIsLoggedIn(true);
    // }


    useEffect(() => {

        // executed AFTER every component is re-evaluated'
        // also, ONLY if dependencies changes
        // e.g. first time
        //      misc after

        const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInfo === '1') {
            // triggers function to be re-ran
            // this overall anon function will not run again
            // because the dependencies didn't change
            // moving forward 
            // this has no dependencies
            // only ran once
            setIsLoggedIn(true);
        }
    },
    [])

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways

        // global available from the browser
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    // everyone in MainHeader (and descendants) will have access to auth context
    return (
        <AuthContext.Provider value={{isLoggedIn: isLoggedIn}}>
            <React.Fragment>
                <MainHeader onLogout={logoutHandler} />
                <main>
                    {!isLoggedIn && <Login onLogin={loginHandler} />}
                    {isLoggedIn && <Home onLogout={logoutHandler} />}
                </main>
            </React.Fragment>
        </AuthContext.Provider>
    );
}

export default App;
