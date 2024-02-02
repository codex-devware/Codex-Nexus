import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const AllOrderCalender = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div data-aos="fade-up" className=" font-outfit rounded-lg mx-auto ">
      <Calendar
        className={
          "h-96 flex flex-col font-outfit rounded-lg mx-auto border-0 bg-gray-200 text-black justify-center items-center"
        }
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default AllOrderCalender;
