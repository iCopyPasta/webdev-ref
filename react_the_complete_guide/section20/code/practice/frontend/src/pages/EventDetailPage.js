import { json, redirect, useRouteLoaderData } from "react-router-dom"

import EventItem from "../components/EventItem";

const EventDetailPage = () => {

    const data = useRouteLoaderData('event-detail');
    return (
            <EventItem event={data.event}></EventItem>
    );
};

export default EventDetailPage;

// React Router will pass an object to your loader function
// object contains
// request property - Request object
// Params - all route parameters
export const eventDetailPageLoader = async ({request, params}) => {

    //request.url - to get query parameters
    
    const id = params.eventId
    const response = await fetch("http://localhost:8080/events/" + id);

    if (!response.ok) {
        throw json({message: "Could not fetch details for selected event."}, {
            status: 500
        });
    }
    else {
        return response;
    }
}

export const DeleteEventAction = async ({params, request}) =>{

    const eventId = params.eventId;
  
    const response = await fetch("http://localhost:8080/events/" + eventId,
    {
        method: request.method,
        headers: {
            "Content-Type": "application/json",
        }
    });

    if (!response.ok) {
        throw json({message: "Could not delete event."}, {
            status: 500
        });
    }

    return redirect("/events");    
};