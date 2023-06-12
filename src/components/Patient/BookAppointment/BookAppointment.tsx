import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allEvents, bookAppointment } from "../../../mainStore/user/user-action";
import { ButtonMedium } from "../../../common/Buttons";
import moment from 'moment'; 
import styless from './BookAppointment.module.scss';
import { eventTupleToStore } from "@fullcalendar/core/internal";

const BookAppointment = () => {
  const dispatch: any = useDispatch();
  const { events, userData} = useSelector((state: any) => state.user);
  console.log('userData', userData);

  useEffect(() => {
    dispatch(allEvents())
  }, []);

  const bookAppointmentFun =(event:any) => {
     dispatch(bookAppointment(event , userData.id))
  }

  const createEventButton = events.map((event: any) => {
       const eventLabelDate = moment(event.start).format("MM-DD-YYYY HH:MM");
       const eventLabelendDate = moment(event.end).format("HH:MM");            
       if(eventLabelDate !== 'invalid date'){
        return (
          <div className={styless['event-wrapper']}>
          <ButtonMedium 
          label={`${eventLabelDate} - ${eventLabelendDate}`} 
          bgColor="bg-green-500" 
          btFun={() => {
            bookAppointmentFun(event)
          }}
            ></ButtonMedium>
          </div>
        );
       }
    
  });
  return <div>
    {createEventButton}
  </div>;  
};


export default BookAppointment;