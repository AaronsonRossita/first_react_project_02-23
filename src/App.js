import './App.css';
import NewStudent from './components/newStudent/NewStudent';
import RegisteredStudent from './components/registeredStudents/RegisteredStudent';

function App() {

  const MOCK_STUDENTS = [
    {
      name: "Harry Potter",
      course: "QA"
    },
    {
      name: "Lara Croft",
      course: "Fullstack"
    }
  ]

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
  };

  return(
    <div>
      <NewStudent courses={MOCK_COURSES}/>
      <RegisteredStudent student={MOCK_STUDENTS[0]}/>
      <RegisteredStudent student={MOCK_STUDENTS[1]}/>
    </div>
  );
}

export default App;
