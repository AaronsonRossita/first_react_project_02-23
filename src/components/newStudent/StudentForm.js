import React from "react";
import './StudentForm.css';

function StudentForm(){
    return(
        <form>
            <div className="new-registration__contorls">

                <div className="new-registration__control">
                    <label>Student Name</label>
                    <input type="text">
                    </input>
                </div>

                <div className="new-registration__control">
                    <label>Course Name</label>
                    <select className="course-selection">
                        <option>QA</option>
                        <option>FULLSTACK</option>
                    </select>
                </div>

                <div className="new-registration__control">
                    <label>Course Start Date</label>
                    <input type="date"/>
                </div>
            </div>
            <br></br>
            <div className='new-registration__actions'>
                <button type="button">Cancel</button>
                <button type='submit'>Register Student</button>
            </div>
        </form>
    );
}

export default StudentForm;

