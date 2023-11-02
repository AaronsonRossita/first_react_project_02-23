import React from "react";
import "./NewStudent.css"
import StudentForm from "./StudentForm";

function NewStudent(props){
    return(
        <div className="new-registration">
            <StudentForm/>
        </div>
    )
}

export default NewStudent;