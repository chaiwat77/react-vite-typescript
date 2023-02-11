
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import {th} from 'date-fns/locale'

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import { getRoomBookingThunk, selectRoomBookingState } from "../../redux-toolkit/room/room-slice";
import { Event } from '../../app-types/room-booking.type';

const locales = {
    'th-TH': th,
  }
  
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })

const DashboardHome = () => {
    const dispatch = useAppDispatch();
    const { roomBooking } = useAppSelector(selectRoomBookingState);

    useEffect(()=> {
        dispatch(getRoomBookingThunk());
    },[])

    const onSelectEvent = (calEvent: any) => {
      let data = {
        id: calEvent.id,
        title: calEvent.title,
        // แปลงวันที่เป็นจาก api เป็นของ js ก่อนไม่งั้น big-calendar error
        start: format(Date.parse(calEvent.start),"dd MMMM yyyy HH:mm:ss", {locale: th}),
        end: format(Date.parse(calEvent.end),"dd MMMM yyyy HH:mm:ss", {locale: th}),
        createBy: calEvent.createBy,
      };
      alert(JSON.stringify(data));
      // console.log(JSON.stringify(roomBooking?.events));
    }

    let myEvent = roomBooking?.events.map((item: Event) => {
        return {
          id: item.id,
          title: item.title,
          start: new Date(item.start),
          end: new Date(item.end),
          create_by: item.created_by
        }
    });

    // 
    return ( 
        <>
        <h1>รายการจองห้องประชุม workshop learning</h1>       
        {/* <p>{JSON.stringify(roomBooking?.events)}</p> */}
        <Calendar
        culture='th-TH'
        localizer={localizer}
        events={[...(myEvent != undefined ? myEvent: [])]}
        // events={[...(roomBooking?.events != undefined ? roomBooking.events: [])]}
        startAccessor="start"
        endAccessor="end"
        showMultiDayTimes
        onSelectEvent={onSelectEvent}
        style={{ height: 600 }}
        formats={{
          dateFormat: 'd'
        }}

        />
        
        </>
     );
}
 
export default DashboardHome;