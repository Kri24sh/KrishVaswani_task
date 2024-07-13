
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import axios from 'axios';
import React, { useState, useEffect } from 'react';



const EmployeeListPage = ({setEmployees ,employees}) => {
    const [searchId, setSearchId] = useState('');
    const [searchResults, setSearchResults] = useState([]);

  
    const handleSearch = () => {
        if (searchId === '') {
          setSearchResults(employees);
        } else {
          const filteredEmployee = employees.filter(emp => emp.id.toString() === searchId);
          setSearchResults(filteredEmployee);
        }
      };

    

    useEffect(() => {
        axios.get('https://dummy.restapiexample.com/api/v1/employees')
          .then(response => {
            setEmployees(response.data.data);
            setSearchResults(response.data.data); // Initialize search results with all employees
          })
          .catch(error => console.error(error));
      }, []);
  
      const handleDelete = (id) => {
        const updatedEmployees = employees.filter(emp => emp.id !== id);
        setEmployees(updatedEmployees);
        setSearchResults(updatedEmployees); 
      };

  return (
    <div className="app">
    <h1>Employee Dashboard</h1>
    <SearchBar searchId={searchId} setSearchId={setSearchId} handleSearch={handleSearch} />
    <div className="card-container">
      {searchResults.map(employee => (
        <Card
          key={employee.id}
          employee={employee}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  </div>
  )
}

export default EmployeeListPage