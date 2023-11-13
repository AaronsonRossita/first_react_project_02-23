import React from "react";
import './RegisteredStudentFilter.css';

function RegisteredStudentFilter(props){

    const handleDropDownFilter = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return(
        <div className="registrations-filter">
            <div className="registrations-filter__control">
                <label>Filter by Course Name</label>
                <select onChange={handleDropDownFilter}>
                    {Object.keys(props.courses).map( (course, index) => {
                        return(
                            <option value={course} key={index}>{props.courses[course].displayName}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default RegisteredStudentFilter;