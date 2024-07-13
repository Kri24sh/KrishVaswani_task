import React from 'react';

const EmployeeDetails = ({ employee }) => {
  return (
    <div className="employee-details">
      <h2>Employee Details</h2>
      <div className="details-container">
        <div className="details">
          <p><strong>ID:</strong> {employee.id}</p>
          <p><strong>Name:</strong> {employee.employee_name}</p>
          <p><strong>Salary:</strong> ${employee.employee_salary}</p>
          <p><strong>Age:</strong> {employee.employee_age}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
