
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

    // console.log(JSON.stringify(roomBooking?.events));
    return ( 
        <>
        <h1>รายการจองห้องประชุม</h1>       
        {/* <p>{JSON.stringify(roomBooking?.events)}</p> */}
        <Calendar
        culture='th-TH'
        localizer={localizer}
        events={[...(roomBooking?.events != undefined ? roomBooking.events: [])]}
        startAccessor="start"
        endAccessor="end"
        showMultiDayTimes

        style={{ height: 500 }}
        />
        
        </>
     );
}
 
export default DashboardHome;