import React, { useState } from "react";
import './StudentForm.css'

function StudentForm(props){

    console.log(props.courses);

    const [studentName, setStudentName] = useState("");
    const [chosenCourse, setChosenCourse] = useState("");
    const [courseDate, setCourseDate] = useState("");

    const handleNameChange = (event) => {
        setStudentName(event.target.value);
        console.log(event.target.value);
    }

    const handleCourseChange = (event) => {

    }

    return(
        <form>
            <div>

                <div className="new-registration__control">
                    <label>Student name</label>
                    <input type="text" onChange={handleNameChange} value={studentName}></input>
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
                        <option value="fullstack">Fullstack Course</option>
                        <option value="qa">QA Course</option>
                        <option value="cyber">Cyber Course</option>
                        <option value="product">Product Management Course</option>
                     </select>
                </div>

                <div className="new-registration__control">
                    <label>Course Start Date</label>
                    <input type="date" disabled/>
                </div>

                <br/><br/>
                
                <div className="new-registration__actions">
                    <button type="button">Cancel</button>
                    <button type="submit">Register Student</button>
                </div>
            </div>
        </form>
    )
}

export default StudentForm;