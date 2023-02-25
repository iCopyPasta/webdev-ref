import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
    return (
         <EventForm method="POST"/>
    );
};

export default NewEventPage;

// executed on the client side
export const newEventPageAction = async ({request, params}) => {

    const data = await request.formData();
    // get identifiers
    // const enteredTitle = data.get("title")

    const eventData = {
        title: data.get("title"),
        image: data.get("image"),
        date: data.get("date"),
        description: data.get("description")
    };

    const response = await fetch('http://localhost:8080/events',
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData)
    });

    if(response.status === 422){
        // can use return data in actions
        return response;
    }

    if(!response.ok){
        throw json({message: "Could not save event."}, {status: 500});
    }

    // special Response
    // heavy lifting handled by React Router
    return redirect("/events");
}