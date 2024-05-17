import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

const DetailsPage = (props) =>{
    return (
        <div>
          <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
          />
        </div>
      );
}
export const getStaticPaths = async()=>{
  const client = await MongoClient.connect("mongodb+srv://ag25061999:08X2AoHIvAenZOVm@cluster0.9kbh2an.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find({},{_id: 1}).toArray();
  client.close();
  return{
    fallback: false,
    paths: meetups.map((meetup)=>({
      params: {
        meetupid: meetup._id.toString(),
      }
    }))
  }
}
export const getStaticProps = async (context)=>{
  const {meetupid} = context.params;
  const client = await MongoClient.connect("mongodb+srv://ag25061999:08X2AoHIvAenZOVm@cluster0.9kbh2an.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const selectedMeetup = await meetupCollection.findOne({_id: new ObjectId(meetupid)});
  client.close();
  
  return{
    props:{
     meetupData: {
      id: selectedMeetup._id.toString(),
      title: selectedMeetup.title,
      image: selectedMeetup.image,
      address: selectedMeetup.address,
      description: selectedMeetup.description,
     },
    }
  }
}
export default DetailsPage;