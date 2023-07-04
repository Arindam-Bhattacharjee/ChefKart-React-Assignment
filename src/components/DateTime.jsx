import React from "react";
import "../styles.css";
import selectDate from "../assets/icons/selectDate.svg";
import setTime from "../assets/icons/setTime.svg";

const DateTime = () => {
  return (
    <div>
      <div className="spacer"></div>
      <div className="date-time-container">
        <div className="date-container">
          <div className="date-icon icon">
            <img src={selectDate} height={'17px'} alt="" />
          </div>
          <div className="date-text">21 May 2021</div>
        </div>
        <div className="time-container">
          <div className="time-icon icon">
            <img src={setTime} height={'17px'} alt="" />
          </div>
          <div className="time-text">10:30 Pm-12:30 Pm</div>
        </div>
      </div>
    </div>
  );
};

export default DateTime;
