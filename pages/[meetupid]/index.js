import { useRouter } from "next/router";
import { dummy_meetups } from "..";
import MeetupDetail from "@/components/meetups/MeetupDetail";

const DetailsPage = () =>{
    const router = useRouter()
    const {meetupid} = router.query;
    const details = dummy_meetups.find((meetup)=> meetup.id==meetupid)
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
export default DetailsPage;