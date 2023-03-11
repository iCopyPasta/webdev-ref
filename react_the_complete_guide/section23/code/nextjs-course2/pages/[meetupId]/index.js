import MeetupDetail from "@/components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Madeleine_Paris.jpg/1280px-Madeleine_Paris.jpg"
      alt="A First Meetup"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="The meetup description"
    />
  );
};

// but this is a dynamic page! 
// [meetupId] is dynamic, but build requirement is pre-generated during build-process
// for which dynamic paramter values should be pre-generated
export const getStaticPaths = async () => {
  // object where we describe dynamic segement values
  // for which page should be generated
  return {
    paths: [
      { 
        params: {
          meetupId: "m1"
        }
      },
      { 
        params: {
          meetupId: "m2"
        }
      }
    ],
    // false - contains all supported ID values
    // true - reachout to server instead
    fallback: false
  };
};

// pre-generated during build process
export const getStaticProps = async (context) => {

  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Madeleine_Paris.jpg/1280px-Madeleine_Paris.jpg",
        id: meetupId,
        alt:"A First Meetup",
        title:"A First Meetup",
        address:"Some Street 5, Some City",
        description: "The meetup description"
      }
    }
  };
};

export default MeetupDetails;
