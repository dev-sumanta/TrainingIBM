import React from 'react';
import axios from "axios";

export default class WorkingWithAxios extends React.Component {
    constructor() {
        super();
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        debugger;
        axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((res) => {
            this.setState({
                employees: res.data
            })
        })
    }

    render() {
        debugger;
        return (
            <>
                <h2>Employee List:</h2>
                {this.state.employees.map((emp) => {
                    return (
                        <>
                            <img src={emp.avatar} title={emp.name} />
                            <h3>Employee Name: {emp.name}</h3>
                        </>
                    )
                })}
            </>
        )
    }
}