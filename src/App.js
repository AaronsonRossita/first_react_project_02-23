import './App.css';
import NewStudent from './components/newStudent/NewStudent';
import RegisteredStudent from './components/registeredStudents/RegisteredStudent';

function App() {

  return(
    <div>
      <NewStudent/>
      <RegisteredStudent/>
    </div>
  );
}

export default App;
