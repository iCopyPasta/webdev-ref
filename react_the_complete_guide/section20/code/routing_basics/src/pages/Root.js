// marks where child elements should be rendered
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
    return (
        <Fragment>
            <MainNavigation></MainNavigation>
            <main>
                <Outlet></Outlet>
            </main>
        </Fragment>
    );
};

export default RootLayout;