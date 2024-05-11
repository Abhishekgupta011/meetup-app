import { useRouter } from "next/router";
import { dummy_meetups } from "..";
import MeetupDetail from "@/components/meetups/MeetupDetail";

const DetailsPage = () =>{
    const router = useRouter()
    const {meetupid} = router.query;
    const details = dummy_meetups.find((meetup)=> meetup.id==meetupid)
    // Check if details exist before rendering
    if (!details) {
      // Render a message indicating that the meetup was not found
      return <p>Meetup not found</p>;
  }

    return (
        <div>
          <MeetupDetail
            image={details.image}
            title={details.title}
            address={details.address}
            description={details.description}
          />
        </div>
      );
}
export const getStaticPaths = ()=>{
  const paths = dummy_meetups.map((meetup) => ({
    params: { meetupid: meetup.id },
  }));
  return{
    fallback: false,
    paths,
  }
}
export const getStaticProps = async (context)=>{
  const {meetupid} = context.params;
  console.log(meetupid);
  return{
    props:{
      meetupData:{
        details: dummy_meetups,
        meetupid: meetupid,
      }
    }
  }
}
export default DetailsPage;