import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HooksInReact() {
    let [name, setName] = useState("Mayank");
    let [age, setAge] = useState("30");
    let [loaded, setLoaded] = useState(false)
    let [empList, setEmpList] = useState([])

    function setNameValue() {
        setName("Anshul")
    }

    useEffect(() => {
        if(!empList.length) {
            axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then(res => {
                setEmpList(res.data)
            })
        }
    })

    return (
        <div>
            <h2>User Name: {name}</h2>
            <h3>User Age: {age}</h3>
            <input type="button" value="Update Name" onClick={setNameValue} /><br></br><hr></hr>
            {empList.map(emp => {
                return (
                    <div>{emp.name}</div>
                )
            })}
        </div>
    )
}