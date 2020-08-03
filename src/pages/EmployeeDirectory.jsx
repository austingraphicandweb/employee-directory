import React, { Component } from 'react';
import employees from '../employees.json';
import EmployeeTable from '../components/EmployeeTable';

//using a class to write the javascript list
class EmployeeDirectory extends Component {
    //using stateful react code. below are two seeds.
    state = {
        //importing json data from employees.json
        employees:employees,
        filter:[],
        sort:[],
        filteredEmployees:employees
    }

    employeeFilter(value){
      const employees = this.state.employees.filter(employee => employee.name.includes(value));
      this.setState({filteredEmployees:employees});  
    }

    //this is where I am writing out what is going to be on the web page for the user to see. It is a mix of html and javascript using react. A big difference is the usage of curleys instead of perenthesies for the properties on each line. This allows me to incorporate javascript directly into the html and traverse the object at the top of this document so that the output is dynamic and uses 'hot reloading'
    render() {
        return (
            <div>
                <h1>Employees</h1>
                {/*below is where I am using the react way of writing code and taking my html and javascript languages and mixing them together within the properties of each html element. */}
                <input type="text" onChange={ev => this.employeeFilter(ev.target.value)}/>
                <button onClick={ev => this.setState({employees:[...this.state.employees,{name:this.state.name}]})}>Add</button>
                <EmployeeTable employees = {this.state.filteredEmployees} />
            </div>
        );
    }
}

export default EmployeeDirectory;