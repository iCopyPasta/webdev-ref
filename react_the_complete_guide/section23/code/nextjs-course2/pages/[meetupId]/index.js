import MeetupDetail from "@/components/meetups/MeetupDetail";

import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";


const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Edit {props.meetupData.title} </title>
        <meta 
          name="description"
          content={props.meetupData.description}/>
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        alt={props.meetupData.title}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

// but this is a dynamic page! 
// [meetupId] is dynamic, but build requirement is pre-generated during build-process
// for which dynamic paramter values should be pre-generated
export const getStaticPaths = async () => {
  // object where we describe dynamic segement values
  // for which page should be generated

  // DURING BUILD PROCESS

  const client = await MongoClient.connect("mongodb://root:example@mongo:27017/");
  console.log(client);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // only include the _id, but no other values
  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

  client.close();

  return {
    paths: meetups.map(meetup => ({params: {
      meetupId: meetup._id.toString()
    }})),
    
    // false - contains all supported ID values
    // blocking/true - reachout to server instead
    //   might not be exhaustive 
    //   will generate on demand and then cache it
    //   true - immediately return empty; then pull down new content once done
    //   blocking - user will not seeing anything until finished page is served
    fallback: "blocking"
  };
};

// pre-generated during build process
export const getStaticProps = async (context) => {

  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect("mongodb://root:example@mongo:27017/");
  console.log(client);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // finds ingle meet-gup who is  Object(_id), expected by MongoDB, 
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId)
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      }
    },
  };
};

export default MeetupDetails;
