import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
    const error = useRouteError();
    
    let title = "An error occurred!"; 
    let message = "Something went wrong!";
    
    if (error.status === 500){
        message = error.data.message;
    }

    if (error.status === 404){
        title = "Not found!"
        message = "Page Not Found" 
    }

    // threw a response or other kind of object
    // threw a Response --> Error Object will included status
    console.log(error);
    return (
        <Fragment>
            <MainNavigation>

            </MainNavigation>
            <PageContent
                title = {title}
            >
                <p>{message} - {error.status}</p>
            </PageContent>
        </Fragment>

    );
};

export default ErrorPage;