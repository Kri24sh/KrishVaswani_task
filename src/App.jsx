import {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeListPage from './EmployeeListPage'
import './Styles.css';
import EmployeePage from './components/EmployeePage';

const App = () => {
  const [employees, setEmployees] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeListPage setEmployees={setEmployees} employees={employees} />} />
        <Route path="/employee/:id" element={<EmployeePage employees={employees} />} />
      </Routes>
    </Router>
  );
};

export default App;
