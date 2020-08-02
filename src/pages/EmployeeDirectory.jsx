import React, { Component } from 'react';

//using a class to write the javascript list
class EmployeeDirectory extends Component {
    //using stateful react code. below are two seeds.
    state = {
        employees:[],
        filter:[],
        sort:[]
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
                {/*Number*/}
                <h1>number</h1>
                <input type="text" value={this.state.name} onChange={ev => this.setState({name:ev.target.value})}/>
                <button onClick={ev => this.setState({number:[...this.state.number,{name:this.state.name}]})}>Add</button>
                <ul>
        {this.state.number.map(number => <li>{number.name}</li>)}
                </ul>
                {/*Email*/}
                <h1>email</h1>
                <input type="text" value={this.state.name} onChange={ev => this.setState({name:ev.target.value})}/>
                <button onClick={ev => this.setState({email:[...this.state.email,{name:this.state.name}]})}>Add</button>
                <ul>
        {this.state.email.map(email => <li>{email.name}</li>)}
                </ul>
                {/*Department*/}
                <h1>department</h1>
                <input type="text" value={this.state.name} onChange={ev => this.setState({name:ev.target.value})}/>
                <button onClick={ev => this.setState({department:[...this.state.department,{name:this.state.name}]})}>Add</button>
                <ul>
        {this.state.department.map(department => <li>{department.name}</li>)}
                </ul>
            </div>
        );
    }
}

export default EmployeeDirectory;