import { bookedAppointment, events, saveUser } from "./user.store";

 export const loginUser = (userDetails: any , Navigate: any) => {


     return async(dispatch: any) => {
            const userPayload = JSON.stringify(userDetails)
             const userRes: any = await fetch ('http://localhost:3001/login' , {
              method:'post',
              headers: {
                "Content-Type": "application/json",
        
              },
              body: userPayload
             }).catch((err) => {
                 console.log('server err' , err)
             });

             if(userRes){
                const {userData , status , msg} = await userRes.json();

                if(status === 200){

                    console.log('userData' , userData)
                   dispatch(saveUser({userData}))
                   if(userData.type ==="user"){
                    Navigate('/user')
                   }else if(userData.type === "doctor") {
                    Navigate('/doctor')
                   }else if(userData.type === "admin") {
                    Navigate('/admin')
                   }else {
                       Navigate('/')
                   }

               }else {
                   console.log('res err' , msg)
                }
   
             }
        
          }
      
     }


 export const allEvents = () => {
      return async(dispatch: any) => {

           const allEvents = await fetch('http://localhost:3001/allevents');
           const allEventsRes = await allEvents.json() 


           console.log('allEventsRes',allEventsRes);

           dispatch(events({events: allEventsRes.events }))
      }
 }    

 export const bookAppointment = (event: any, userId:any) => {

      return async(dispatch: any) => {
          const bookAppointmentpayload = JSON.stringify({
            ...event,
            bookingId: userId
          })
           const bookAppointmentApi: any = await fetch ('http://localhost:3001/bookAppointment' , {
            method:'post',
            headers: {
              "Content-Type": "application/json",
      
            },
            body: bookAppointmentpayload
           }).catch((err) => {
               console.log('server err' , err)
           });

           const bookAppointmentRes = await bookAppointmentApi.json()
           console.log('bookAppointmentRes' , bookAppointmentRes)
          
      }

 }

 export const getAllBookedAppointment = (userId: any) => {
  return async(dispatch: any) => {
    
    const bodyJson = JSON.stringify({userId});
    const getAllBookedAppointmentApi: any = await fetch ('http://localhost:3001/users/bookedAppointment' , {
      method:'post',
      headers: {
        "Content-Type": "application/json",

      },
      body: bodyJson
     }).catch((err) => {
         console.log('server err' , err)
     });

     const {event} = await getAllBookedAppointmentApi.json();

     console.log('getAllBookedAppointmentRes' , event)
      
     dispatch(bookedAppointment({bookedAppointment: event}))
  }
 }

