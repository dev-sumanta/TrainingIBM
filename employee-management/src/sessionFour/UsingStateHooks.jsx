import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function UsingStateHooks() {

    var initial = 0;
    debugger;
    let [name, setName] = useState("Mayank");
    let [age, setAge] = useState(30)
    let [designation] = useState("Xyz..")
    let [empList, setEmpList] = useState([]);

    function UpdateData() {
        setName("Anshul");
    }

    useEffect(() => {
        debugger;
        if(empList.length == 0 && initial == 0) {
            initial = 1;
            axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then(res => {
                setEmpList(res.data)
            })
            
        }
        
    })

    setTimeout(function() {
        setAge(age + 1)
    }, 3000)

    return (
        <div>
            <h2>User Name: {name}</h2>
            <h2>User Age: {age}</h2>
            <h2>User Designation: {designation}</h2>

            {empList.map(emp => {
                return <div>{emp.name}</div>
            })}


            <ChildComponent updateFunction={setName}></ChildComponent>
            <input type="button" onClick={UpdateData} value="Click" />
        </div>
    )
}

function ChildComponent(props) {
    props.updateFunction("shdjhsd")
    return <h4>This is Child Component...</h4>
}