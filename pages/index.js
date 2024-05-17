import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { useEffect, useState } from "react";


const HomePage = (props) =>{
    return(
        <div>  
        <Head>
            <title>NextJS Meetups</title>
            <meta name="description" content="browse"/>
        </Head> 
            <MeetupList meetups={props.meetups}/>
        </div>
    )
}
// export const getServerSideProps = async(context)=>{
//     const req = context.req;
//     const res = context.res;

//     //fetch data from an API
//     return{
//         props: {
//                         meetups: dummy_meetups,
//                     }
//     }
// }
export const getStaticProps = async()=>{
    const client = await MongoClient.connect("mongodb+srv://ag25061999:08X2AoHIvAenZOVm@cluster0.9kbh2an.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        const db = client.db();
        const meetupCollection = db.collection('meetups');
        const result = await meetupCollection.find().toArray();
        client.close();
    return{
        props: {
            meetups: result.map((meetup)=>({
                    title: meetup.title,
                    image: meetup.image,
                    address: meetup.address,
                    description: meetup.description,
                    id: meetup._id.toString(),
            })),
        },
        revalidate: 1
    }
}
export default HomePage;