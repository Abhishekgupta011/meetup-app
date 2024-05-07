import MeetupList from "@/components/meetups/MeetupList";

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
    }
]
const HomePage = () =>{
    
    return(
        <div>
           
            <MeetupList meetups={dummy_meetups}/>
        </div>
    )
}
export default HomePage;