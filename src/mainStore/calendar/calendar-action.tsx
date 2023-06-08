import { saveEvents } from "./calendar-store";

export const getEvents = (userId: any) => {
    return async (dispatch:any) => {

        const userIdPayload = JSON.stringify({userId})
        const getEventAPI:any = await fetch('http://localhost:3001/getevent',{
         method: 'POST',
         headers: {
           "Content-Type": "application/json",
         },
         body: userIdPayload
        }).catch((err) => {
                console.log('server err',err)
        });
        
        const {userEvent} = await getEventAPI.json();
 
        dispatch(saveEvents({userEvent}))

        
    }
}

export const saveEvent = (event: any) => {
    return async (dispatch:any) => {

        const eventPayload = JSON.stringify(event)
        const eventAPI:any = await fetch('http://localhost:3001/saveevent',{
         method: 'POST',
         headers: {
           "Content-Type": "application/json",
         },
         body: eventPayload
        }).catch((err) => {
                console.log('server err',err)
        });
        
        const eventRes = await eventAPI.json();
        dispatch(getEvents(event.userId))
        console.log('eventRes', eventRes);


    }
}

