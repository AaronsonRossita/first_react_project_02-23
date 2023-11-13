import React, { useState } from "react";
import "./Registration.css";
import RegisteredStudentFilter from "./RegisteredStudentFilter";
import RegisteredStudentList from "./RegisteredStudentList";
import RegisteredStudentChart from "./RegisteredStudentChart";

function Registration(props){

    const [filterCourse, setFilterCourse] = useState('fullstack');

    const handleFilterChange = (chosenCourse) => {
        setFilterCourse(chosenCourse);
    }

    const filteredRegistereStudents = props.registeredStudents.filter( (student) => {
        return student.course === filterCourse
    })

    return(
        <div className="registrations card">
            <RegisteredStudentChart courses={props.courses} registeredStudents={props.registeredStudents}/>
            <RegisteredStudentFilter courses={props.courses} onChangeFilter={handleFilterChange}/>
            <RegisteredStudentList courses={props.courses} registeredStudents={filteredRegistereStudents}/>
        </div>
    )
}

export default Registration;