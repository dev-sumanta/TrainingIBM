import React from 'react';

function HigherOrderContainer(WrapperComponent) {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                name: "Mayank",
                age: 30,
                salary: 20,
                designation: "XYZ..."
            }
        }
    
        render() {
            return (
                <>
                    <WrapperComponent {...this.state}></WrapperComponent>
                </>
            )
        }
    }
}

function EmployeeDetails(props) {
    return <div>Details: {props.name}</div>
}

function EmployeeSalary(props) {
    return <div>Details: {props.salary}</div>
}

export var NewComponent = HigherOrderContainer(EmployeeDetails);
export var NewSalaryComponent = HigherOrderContainer(EmployeeSalary);

