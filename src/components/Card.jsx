import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ employee, handleDelete }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/employee/${employee.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <h3>{employee.employee_name}</h3>
      <p>Salary: ${employee.employee_salary}</p>
      <p>Age: {employee.employee_age}</p>
      <div className="card-buttons">
        <button onClick={(e) => { e.stopPropagation(); handleDelete(employee.id); }}>Delete</button>
        <button onClick={(e) => e.stopPropagation()}>Edit</button>
      </div>
    </div>
  );
};

export default Card;