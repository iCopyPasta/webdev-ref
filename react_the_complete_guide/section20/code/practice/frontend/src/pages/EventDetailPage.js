import { useParams } from "react-router-dom"

const EventDetailPage = () => {

    const params = useParams();

    // JS object w/ every dynamic path segment as a property
    const eventId = params.eventId;

    return (
        <h1>Event Detail Page - {eventId}</h1>
    );
};

export default EventDetailPage;