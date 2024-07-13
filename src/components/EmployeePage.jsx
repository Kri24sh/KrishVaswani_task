import React from 'react';
import { useParams } from 'react-router-dom';
import EmployeeDetails from './EmployeeDetails';

const EmployeePage = ({ employees }) => {
  const { id } = useParams();
  const employee = employees.find(emp => emp.id.toString() === id);

  return (
    <div className="employee-page">
      {employee ? <EmployeeDetails employee={employee} /> : <p>Employee not found</p>}
    </div>
  );
};

export default EmployeePage;
