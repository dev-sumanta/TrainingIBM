import React from 'react';
import axios from "axios"

export default class WorkingWithAxios extends React.Component {
    constructor() {
        super();
        this.state = {
            empData: []
        }
    }

    componentDidMount() {
        axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((res) => {
            this.setState({
                empData: res.data
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.empData.map((data) => {
                    return (
                        <div>{data.name}</div>
                    )
                })}
            </div>
        )
    }
}