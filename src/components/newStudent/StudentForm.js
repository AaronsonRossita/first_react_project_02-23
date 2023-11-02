import React from "react";
import './StudentForm.css'

function StudentForm(props){

    return(
        <form>
            <div>

                <div className="new-registration__control">
                    <label>Student name</label>
                    <input type="text"></input>
                </div>

                <div className="new-registration__control">
                    <label>Course Name</label>
                    <select
                        className="course-selection"
                        defaultValue=""
                        required>
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
                    <input type="date"></input>
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