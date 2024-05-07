const { default: NewMeetupForm } = require("@/components/meetups/NewMeetupForm")

const NewMeetupPage = ()=>{
    const addMeetupHandler = (eneteredMeetupData)=>{
        console.log(eneteredMeetupData);
    }
    return(
        <>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </>
    )
}
export default NewMeetupPage;