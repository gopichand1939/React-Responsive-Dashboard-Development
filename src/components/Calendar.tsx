import React from "react";

const Calendar: React.FC = () => {
  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);
  const activeDates = [1, 27, 30]; // example selected dates

  return (
    <div className="bg-[#1b254b] p-6 rounded-xl text-white">
      <div className="flex justify-between items-center mb-4">
        <select className="bg-transparent text-sm outline-none">
          <option>April</option>
        </select>
        <select className="bg-transparent text-sm outline-none">
          <option>2021</option>
        </select>
      </div>
      <div className="grid grid-cols-7 text-center text-xs text-gray-400 gap-y-2 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center text-sm gap-y-2 text-white">
        {dates.map((date) => (
          <div
            key={date}
            className={`py-1 rounded-full ${
              activeDates.includes(date)
                ? "bg-[#805AD5] text-white"
                : "hover:bg-[#141e3c]"
            }`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
