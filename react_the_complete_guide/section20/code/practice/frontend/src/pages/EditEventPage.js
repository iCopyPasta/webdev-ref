import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

const EditEventPage = () => {

    // useLoaderData() looks for the closet available loader data - highlest level is the route definition for which the component was loaded
    const data = useRouteLoaderData('event-detail');
    const event = data.event;

    return (<EventForm method = "PATCH" event={event}></EventForm>);
};

export default EditEventPage;