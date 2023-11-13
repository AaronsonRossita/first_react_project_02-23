import React from "react";
import "./RegisteredStudentList.css"
import RegisteredStudent from "./RegisteredStudent";

function RegisteredStudentList(props){

    return(
        <ul className="registrations-list">
            {props.registeredStudents.map( (student) => {
                return(
                    <li><RegisteredStudent student={student} date={props.courses[student.course].startDate}/></li>
                )
            })}
        </ul>
    )
}

export default RegisteredStudentList;