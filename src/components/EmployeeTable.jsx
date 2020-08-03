import React from 'react';


function EmployeeTable({employees}) {
    return (
        <div className="EmployeeTable">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Department</th>
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