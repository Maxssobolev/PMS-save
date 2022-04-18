import React, { useEffect, useState } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';


export default function Diary(props) {
    const calendarRef = props.calendarRef
    const gotoDate = (date) => {
        let calendarApi = calendarRef.current.getApi();
        calendarApi.gotoDate(date); // call a method on the Calendar object
    };

    useEffect(() => {
        if (props.initialDate) {
            let selectedDay = new Date(props.initialDate).toISOString();
            gotoDate(selectedDay)
        }
    }, [props.initialDate])


    useEffect(() => {
        //кастомим кнопки
        document.querySelector(".fc-header-toolbar.fc-toolbar.fc-toolbar-ltr").style.display = 'none'
    })
    return (
        <div className="diaryTable">
            <FullCalendar
                ref={calendarRef}
                initialView="timeGridWeek"
                slotLabelFormat={e => `${e.date.hour}:${e.date.minute <= 9 ? `0${e.date.minute}` : e.date.minute}`}//24h in rows time display
                eventTimeFormat={{ hour12: false, hour: '2-digit', minute: '2-digit' }} //24h in event time display
                slotMinTime={`07:00:00`}
                slotLabelInterval={`0:30`}
                defaultTimedEventDuration={`0:30`}
                firstDay={1} //monday
                buttonText={{ today: 'Today' }}
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "timeGridWeek dayGridMonth timeGridDay listWeek"
                }}
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                height='auto'
                //displayEventTime={false} //убираем время начала
                events={props.events}
                eventDisplay="block"
                allDaySlot={false} //отключаем поле All Day

            />
        </div>
    )
}

