import React, { Component } from 'react';

//using a class to write the javascript list
class EmployeeDirectory extends Component {
    //using stateful react code. below are two seeds.
    state = {
        name:"test",
        employees:[{name:"sam"},{name:"josh"}]
    }
    // I think that this is the same as line 22, but was being explain differently to me for comprehention reason so it can be removed.
    addEmployee(){
        const newEmployeeList = this.state.employees.concat(this.state.name)
        this.setState({
            employees:newEmployeeList
        })
    }
    //this is where I am writing out what is going to be on the web page for the user to see. It is a mix of html and javascript using react. A big difference is the usage of curleys instead of perenthesies for the properties on each line. This allows me to incorporate javascript directly into the html and traverse the object at the top of this document so that the output is dynamic and uses 'hot reloading'
    render() {
        return (
            <div>
                <h1>Employees</h1>
                {/*below is where I am using the react way of writing code and taking my html and javascript languages and mixing them together within the properties of each html element. */}
                <input type="text" value={this.state.name} onChange={ev => this.setState({name:ev.target.value})}/>
                <button onClick={ev => this.setState({employees:[...this.state.employees,{name:this.state.name}]})}>Add</button>
                <ul>
        {/*Below is where I am using react to map over the list of employees and print a new name to my list (double check this) */}
        {this.state.employees.map(employee => <li>{employee.name}</li>)}
                </ul>
            </div>
        );
    }
}

export default EmployeeDirectory;