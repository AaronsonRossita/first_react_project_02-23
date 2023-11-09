import React from "react";
import "./CourseDate.css";

function CourseDate(props){

    return(
        <div className="registration-date">
            {props.date}
        </div>
    )
}

export default CourseDate