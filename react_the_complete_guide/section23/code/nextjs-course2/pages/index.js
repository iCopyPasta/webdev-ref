// for / in the subfolder

// sample image:
// https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Madeleine_Paris.jpg/1280px-Madeleine_Paris.jpg
// import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";
// import { useEffect } from "react";

// only be executed on the server
// NextJS detects and does not bundle w/ client
import { MongoClient } from "mongodb";

// allows you to add <head>
import Head from "next/head";
import { Fragment } from "react";

// const imageUrl =
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Madeleine_Paris.jpg/1280px-Madeleine_Paris.jpg";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image: imageUrl,
//     address: "Some Address 5, 12345 Some City",
//     description: "This is a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A 2nd Meetup",
//     image: imageUrl,
//     address: "Some Address 7, 12345 Some City",
//     description: "This is a 2nd meetup!",
//   },
// ];

const HomePage = (props) => {


  // behaving if we DID reach out to a backend
  // in ReactJS (traditional)
  //   useEffect() to control/fetch after hitting page
  //     empty dependencies
  //   useState() to manage GUI state
  //   upon result, re-render result
  
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // // AFTER component function is executed
  // // this is executed twice
  // // re-rendering the 2nd cycle
  // useEffect(() => {
  //   // send a http request and fetch data
  //   // some Promise finished here
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  // we'd STILL have a problem with SEO
  // content from SEO crawler is pre the empty unordered list (1st render cycle)

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta 
          name="description"
          content="Browse a huge list of highly active React meetups"/>
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </Fragment>
  );
};

// only work in pages component files!!!!
// components in "pages" folder
// reserved name - NextJS looks for this
// executes during Pre-Rendering Process
// called before the above ReactJS component
// prepares props for page - could contain data that the page needs!
export const getStaticProps = async () =>{
  // can execute code that would normally run on the server
  // securely connect to database
  // will never end up on client side!!
  // DURING BUILD PROCESS

  const client = await MongoClient.connect("mongodb://root:example@mongo:27017/");
  console.log(client);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close(); 

  // example
  // fetch data from an API
  // or read files from filesystem
  // must always return Object
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address:meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    // page re-pre-generated on server after deployment
    // so long as requests are coming in
    revalidate: 1
  };
};

// always runs on the server after deployment
// export const getServerSideProps = async (context) =>{

//   // working w/ auth? check session cookie!
//   const req = context.req;

//   const res = context.res;

//   // example
//   // fetch data from an API
//   // or read files from filesystem
//   // must always return Object
//   // ALWAYS runs on the SERVER
//   // can run things that might require credentials
//   return (
//     {
//       props: {
//         meetups: DUMMY_MEETUPS
//       }
//     }
//   )

// };

export default HomePage;
