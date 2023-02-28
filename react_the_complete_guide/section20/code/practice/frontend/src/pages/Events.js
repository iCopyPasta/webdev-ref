
// fetch magic

//import { Fragment, useEffect, useState } from 'react';

import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';


const loadEvents = async () => {
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
        const responseData = await response.json();
        return responseData.events;
    }
}

// execute on the client
// can use any browser API
// cookies, storage, etc. 
// CAN'T use React Hooks as they're for components
export const eventsPageLoader = () => {

    return defer({
        // value must return Promise
        events: loadEvents()
    });
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

    // if (data.isError) {
    //     return <p>{data.message}</p>
    // }

    // deferring
    // Suspense - to show fallback
    // Await - main content

    const {events} = useLoaderData();

    return (
        <Suspense
            fallback={<p style={{textAlign: 'center'}}>Loading...</p>}
            >
            <Await resolve={events}>
                {(loadedEvents)=>
                    // once promise resolves
                    <EventsList events={loadedEvents}></EventsList>    
                }
            </Await>
        </Suspense>
    );
};

export default EventsPage;