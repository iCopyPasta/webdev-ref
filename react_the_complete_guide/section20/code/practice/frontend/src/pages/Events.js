
// fetch magic

//import { Fragment, useEffect, useState } from 'react';

import { Fragment } from 'react';
import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

// execute on the client
// can use any browser API
// cookies, storage, etc. 
// CAN'T use React Hooks as they're for components
export const eventsPageLoader = async () => {

    // React can handle Promises<Responses>

    const response = await fetch('http://localhost:8080/events');

    // 400/500
    if (!response.ok) {
        // return new Response();
        //return {isError: true, message: 'Could not fetch events'};
        // React Router will render closest ErrorElement
        
        //throw new Response(JSON.stringify({message: "Could not fetch events"}), {status: 500});
        return json({message: "Could not fetch events"}, {status: 500});
    } else {
        return response
    }
};

const EventsPage = () => {

    // but what if we wanted to have the React Router send a fetch request BEFORE trying to load this component? 
    // vs. loading the whole fallback first, and then trying to make a request after loading everything
    // child components and alike would go first w/ render + evaluation BEFORE data request
    // below:
    // is boilerplate code
    // should outsource into custom hook
    // 
    // 
    // "loader()"
    //
    // useEffect(() => {
    //     async function fetchEvents() {
    //     setIsLoading(true);
    //     const response = await fetch('http://localhost:8080/events');

    //     if (!response.ok) {
    //         setError('Fetching events failed.');
    //     } else {
    //         const resData = await response.json();
    //         setFetchedEvents(resData.events);
    //     }
    //     setIsLoading(false);
    //     }

    //     fetchEvents();
    // }, []);

    // React checks Promise for you
    // Will get final data yielded by promise
    // could move this into EventsList
    // but could not move it to RootLayout above
    const data = useLoaderData();

    // if (data.isError) {
    //     return <p>{data.message}</p>
    // }

    const events = data.events;

    return (
        // loads the closet loader

        <Fragment>
            <EventsList events={events}></EventsList>
        </Fragment>
    );
};

export default EventsPage;