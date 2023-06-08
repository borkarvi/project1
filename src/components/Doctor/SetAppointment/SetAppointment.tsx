import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from '@fullcalendar/core'
import { INITIAL_EVENTS, createEventId } from '../../../FullCalendarCommon/utils'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents, saveEvent } from '../../../mainStore/calendar/calendar-action'
import { useEffect } from 'react'
const SetAppointment = () => {
  const { userData } = useSelector((state: any) => state.user);
  const { events } = useSelector((state: any) => state.calendar);
  
  const dispatch: any = useDispatch();


  console.log('events from setAp',events)
  
  useEffect(() => {
    if(userData && userData.id){
      dispatch(getEvents(userData.id))
    }
  },[])

  const renderEventContent = (eventContent: EventContentArg) => {
    return (
      <>
        <b>{eventContent.timeText}</b>
        <i>{eventContent.event.title}</i>
      </>
    )
  }
  const handleDateSelect = (selectInfo: DateSelectArg) => {
  
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    const newEvent:any = {
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
      userId: userData.id
    }
    console.log('newEvent',newEvent);

    if (title) {
      dispatch(saveEvent(newEvent));
      calendarApi.addEvent(newEvent)

    }
  }

  const handleEventClick = (clickInfo: EventClickArg) => {
    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //   clickInfo.event.remove()
    // }
  }

  const handleEvents = (events: EventApi[]) => {
    // this.setState({
    //   currentEvents: events
    // })
  }


    return (
        <div>
     <FullCalendar
       plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
       headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      initialView='dayGridMonth'
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      // weekends={this.state.weekendsVisible}
      initialEvents={events} // alternatively, use the `events` setting to fetch from a feed
      select={handleDateSelect}
      eventContent={renderEventContent} // custom render function
      eventClick={handleEventClick}
      eventsSet={handleEvents}
      events={events}
      />
        </div>
    )
};

export default SetAppointment;