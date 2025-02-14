"use client"
import React, { useState } from 'react';

const CustomDatePicker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const startingDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  
  const days = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  
  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };
  
  const handleDateSelect = (day) => {
    if (day && !isPastDate(day)) {
      const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      setSelectedDate(selected);
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const isPastDate = (day) => {
    const today = new Date();
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return checkDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const isSelected = (day) => {
    if (!selectedDate || !day) return false;
    return day === selectedDate.getDate() && 
           currentDate.getMonth() === selectedDate.getMonth() && 
           currentDate.getFullYear() === selectedDate.getFullYear();
  };

  const customGreenStyle = {
    backgroundColor: '#305200'
  };

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-lg shadow-lg p-2 sm:p-4">
      <div className="flex justify-between items-center mb-2 sm:mb-4">
        <button 
          onClick={previousMonth}
          className="px-2 sm:px-3 py-1 rounded text-lg sm:text-xl hover:bg-gray-100"
        >
          ←
        </button>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
          {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h2>
        <button 
          onClick={nextMonth}
          className="px-2 sm:px-3 py-1 rounded text-lg sm:text-xl hover:bg-gray-100"
        >
          →
        </button>
      </div>

      <div className="flex-grow grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div 
            key={day} 
            className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-500 p-1 sm:p-2"
          >
            {day}
          </div>
        ))}
        
        {days.map((day, index) => (
          <div
            key={index}
            className={`
              p-1 sm:p-2 text-center cursor-pointer transition-colors duration-200
              text-xs sm:text-sm md:text-base
              flex items-center justify-center
              ${!day ? 'text-gray-300' : isPastDate(day) ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-green-50'}
            `}
            style={isSelected(day) ? customGreenStyle : {}}
            onMouseEnter={(e) => isSelected(day) && (e.currentTarget.style.backgroundColor = '#3d6600')}
            onMouseLeave={(e) => isSelected(day) && (e.currentTarget.style.backgroundColor = '#305200')}
            onClick={() => handleDateSelect(day)}
          >
            <span className={isSelected(day) ? 'text-white' : ''}>
              {day}
            </span>
          </div>
        ))}
      </div>

      {selectedDate && (
        <div className="mt-2 sm:mt-4 text-center text-xs sm:text-sm md:text-base text-gray-600">
          Selected: {formatDate(selectedDate)}
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;