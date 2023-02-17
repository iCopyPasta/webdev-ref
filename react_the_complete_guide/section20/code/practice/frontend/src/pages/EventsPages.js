
// fetch magic

import { Fragment } from "react";
import EventList from "../components/EventsList";

const DUMMY_EVENTS = [
    {
        id: "0",
        title: "0",
        image: ""
    },
    {
        id: "1",
        title: "1",
        image: ""
    },
    {
        id: "2",
        title: "2",
        image: ""
    }
];

const EventsPage = () => {
    return (
        <Fragment>
            <h1>Events Page</h1>
            <EventList events={DUMMY_EVENTS}></EventList>
        </Fragment>
    );
};

export default EventsPage;