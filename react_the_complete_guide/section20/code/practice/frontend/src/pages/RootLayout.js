// marks where child elements should be rendered
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
    //const navigation = useNavigation();

    // navigation.state = 'loading'
    // navigation.state === 'submitting'
    // navigation.state === 'idle'

    return (
        <Fragment>
            <MainNavigation></MainNavigation>
            <main>
                {/*navigation.state === 'loading' && <p>Loading...</p>*/}
                <Outlet></Outlet>
            </main>
        </Fragment>
    );
};

export default RootLayout;