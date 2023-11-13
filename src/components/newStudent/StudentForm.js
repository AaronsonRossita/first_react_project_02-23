import React, { useState } from "react";
import './StudentForm.css'
import dateFormatting from "../utils/dateUtils";

function StudentForm(props){

    const [studentName, setStudentName] = useState("");
    const [chosenCourse, setChosenCourse] = useState("");
    const [courseDate, setCourseDate] = useState("");

    const handleNameChange = (event) => {
        setStudentName(event.target.value);
    }

    const handleCourseChange = (event) => {
        let courseValue = event.target.value;
        setChosenCourse(courseValue);
        setCourseDate(dateFormatting(props.courses[courseValue].startDate));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const student = {
            name: studentName,    // student name from input
            course: chosenCourse, // course value name (not the displayname)
            displayName:props.courses[chosenCourse].displayName
        }

        setStudentName("");
        setChosenCourse("");
        setCourseDate("");
    
        props.register(student);
        props.cancel();
    }

    const handleCancel = () => {
        props.cancel();
    }


    return(
        <form onSubmit={handleSubmit}>
            <div>

                <div className="new-registration__control">
                    <label>Student name</label>
                    <input type="text" onChange={handleNameChange} value={studentName} required></input>
                </div>

                <div className="new-registration__control">
                    <label>Course Name</label>
                    <select
                        className="course-selection"
                        defaultValue=""
                        required
                        onChange={handleCourseChange}>
                        <option value="" disabled>
                            Please Choose A Course
                        </option>
                        {/* <option value="fullstack">Fullstack Course</option>
                        <option value="qa">QA Course</option>
                        <option value="cyber">Cyber Course</option>
                        <option value="product">Product Management Course</option> */}
                        {Object.keys(props.courses).map( (c) => {
                            return( 
                                <option value={props.courses[c].name}>{props.courses[c].displayName}</option> 
                            )
                        })}
                    </select>
                </div>

                <div className="new-registration__control">
                    <label>Course Start Date</label>
                    <input type="date" value={courseDate} disabled/>
                </div>

                <br/><br/>
                
                <div className="new-registration__actions">
                    <button type="button" onClick={handleCancel}>Cancel</button>
                    <button type="submit">Register Student</button>
                </div>
            </div>
        </form>
    )
}

export default StudentForm;