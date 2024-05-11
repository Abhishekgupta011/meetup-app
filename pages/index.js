import MeetupList from "@/components/meetups/MeetupList";
import { useEffect, useState } from "react";

export const dummy_meetups = [
    {
        id : 'm1',
        title : 'A first meetup',
        image : 'https://media.cntraveler.com/photos/5653458696771ce632e46c88/master/pass/hallstatt-austria-cr-getty.jpg',
        address : 'Some address 5, 12345 Some City',
        description : 'This is a first meetup'
    },
    {
        id : 'm2',
        title : 'A second meetup',
        image : 'https://media.cntraveler.com/photos/5653458696771ce632e46c88/master/pass/hallstatt-austria-cr-getty.jpg',
        address : 'Some address 5, 12345 Some City',
        description : 'This is a second meetup'
    },
    {
        id : 'm3',
        title : 'A third meetup',
        image : 'https://media.cntraveler.com/photos/5653458696771ce632e46c88/master/pass/hallstatt-austria-cr-getty.jpg',
        address : 'Some address 5, 12345 Some City',
        description : 'This is a third meetup'
    },
]
const HomePage = (props) =>{
    return(
        <div>   
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
    return{
        props: {
            meetups: dummy_meetups,
        },
        revalidate: 1
    }
}
export default HomePage;