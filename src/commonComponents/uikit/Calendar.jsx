




// import React from "react";
// import { Calendar } from "antd";
// import dayjs from "dayjs"; // Required for date control
// // import "./CalendarWidget.scss"; // Optional styling

// const CalendarWidget = ({ onSelect, value = dayjs() }) => {
//   // Optional: You can pass onSelect callback to get selected date
//   const handlePanelChange = (date, mode) => {
//     console.log("Changed to:", date.format("YYYY-MM-DD"), "Mode:", mode);
//   };

//   const headerRender = ({ value, type, onChange, onTypeChange }) => {
//     const current = value.clone();

//     const selectYear = (offset) => {
//       const newDate = current.add(offset, "year");
//       onChange(newDate);
//     };

//     const selectMonth = (offset) => {
//       const newDate = current.add(offset, "month");
//       onChange(newDate);
//     };

//     return (
//       <div className="calendar-header">
//         <div className="calendar-nav">
//           <button onClick={() => selectYear(-1)}>«</button>
//           <button onClick={() => selectMonth(-1)}>‹</button>
//           <span>{current.format("MMMM YYYY")}</span>
//           <button onClick={() => selectMonth(1)}>›</button>
//           <button onClick={() => selectYear(1)}>»</button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="calendar-wrapper">
//       <Calendar
//         fullscreen={false}
//         value={value}
//         onSelect={onSelect}
//         onPanelChange={handlePanelChange}
//         headerRender={headerRender}
//       />
//     </div>
//   );
// };

// export default CalendarWidget;
