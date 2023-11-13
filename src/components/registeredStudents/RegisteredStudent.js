import React from "react";
import "./RegisteredStudent.css"
import CourseDate from "./CourseDate";

function RegisteredStudent(props){

    return(
        <div className="registration-student card">
            <CourseDate date={props.date}/>
            <div className="registration-student__description">
                <h2>{props.student.name}</h2>
                <div className="registration-student__course">
                    {props.student.displayName}
                </div>
            </div>
        </div>
    )
}

export default RegisteredStudent;
