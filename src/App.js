import { useState } from 'react';
import './App.css';
import NewStudent from './components/newStudent/NewStudent';
import RegisteredStudent from './components/registeredStudents/RegisteredStudent';

function App() {

  const MOCK_COURSES = {
    fullstack: {
      id: "1",
      name: "fullstack",
      displayName: "Fullstack Course",
      startDate: new Date(2023, 7, 14),
    },
    qa: {
      id: "2",
      name: "qa",
      displayName: "QA Course",
      startDate: new Date(2023, 2, 20),
    },
    cyber: {
      id: "3",
      name: "cyber",
      displayName: "Cyber Course",
      startDate: new Date(2023, 4, 5),
    },
    product: {
      id: "4",
      name: "product",
      displayName: "Product Course",
      startDate: new Date(2023, 6, 30),
    },
    ui_ux:{
      id: "5",
      name: "ui_ux",
      displayName: "UI/UX Course",
      startDate: new Date(2023, 4, 26),
    }
  };

  const [students, setStudents] = useState([]);

  const handleStudentRegistration = (data) => {
    setStudents( (prevStudents) => {
      return [...prevStudents,data]
    })
  }
  

  return(
    <div>
      <NewStudent courses={MOCK_COURSES} register={handleStudentRegistration}/>
      {students.map( (s,i) => {
        return(
          <RegisteredStudent students={students} courses={MOCK_COURSES}/>
        )
      })}
    </div>
  );
}

export default App;
