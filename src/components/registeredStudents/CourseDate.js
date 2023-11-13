import React from "react";
import "./CourseDate.css";

function CourseDate(props){

    const day = props.date.toLocaleString('en-US',{day: '2-digit'});
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();

    return(
        <div className="registration-date">
            {day} / {month} / {year}
        </div>
    )
}

export default CourseDate