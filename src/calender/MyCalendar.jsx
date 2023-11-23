import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default stylesheet
import './CalendarStyles.css';
export default function MyCalendar() {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div className='m-4'>
            <Calendar onChange={onChange} value={date} />
            <p className='text-white'>Selected Date: {date.toDateString()}</p>
        </div>
    );
}
