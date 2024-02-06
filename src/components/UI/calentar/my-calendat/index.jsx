'use client'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './calendar.css'

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const handleDateClick = (value, event) => {
    // Use the 'value' parameter to get the clicked date
    setSelectedDate(value);
    console.log('Date clicked:', value);
  };

  const handleDoubleDateClick = (value, event) => {
    // Use the 'value' parameter to get the double-clicked date
    console.log('Date double-clicked:', value);
  };

  const clearSelectedDate = () => {
    // Clear the selected date
    setSelectedDate(null);
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={date}
        onClickDay={handleDateClick}
        onDoubleClickDay={handleDoubleDateClick}
      />
      {/* <div>
        <p>Selected Date: {selectedDate ? selectedDate.toDateString() : 'None'}</p>
        <button onClick={clearSelectedDate}>Clear Selected Date</button>
      </div> */}
    </div>
  );
}

export default MyCalendar;
