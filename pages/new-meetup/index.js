import Head from "next/head";
import { useRouter } from "next/router";

const { default: NewMeetupForm } = require("@/components/meetups/NewMeetupForm")

const NewMeetupPage = ()=>{
    const router = useRouter();
    const addMeetupHandler = async(eneteredMeetupData)=>{
        console.log(eneteredMeetupData);
        const response = await fetch('/api/new-meetup',{
            method:'POST',
            body:JSON.stringify(eneteredMeetupData),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        router.push('/');
    }
    return(
        <>
        <Head>
            <title>NextJS Meetups</title>
            <meta name="description" content="browse"/>
        </Head> 
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </>
    )
}
export default NewMeetupPage;