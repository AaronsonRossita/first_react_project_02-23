import React from "react";
import "./RegisteredStudent.css"
import CourseDate from "./CourseDate";

function RegisteredStudent(props){

    let mock_date = "14 / August / 2023";
    
    return(
        <div>
            <div className="registration-student__description">
                {props.students.map( (student) => {
                    return(
                        <div>
                            <CourseDate date={mock_date}/>
                            <h2>{student.name}</h2>
                            <div className="registration-student__course">
                                {student.displayName}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RegisteredStudent;
