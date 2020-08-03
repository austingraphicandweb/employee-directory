import React from 'react';


function EmployeeTable({employees, employeeSorted}) {
    return (
        <div className="EmployeeTable">
            <table>
                <tr>
                    <th onClick={() => employeeSorted('name')}>Name</th>
                    <th onClick={() => employeeSorted('email')}>Email</th>
                    <th onClick={() => employeeSorted('phone')}>Phone</th>
                    <th onClick={() => employeeSorted('department')}>Department</th>
                </tr>
                {employees.map(employee => (
                    <tr>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.department}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default EmployeeTable;