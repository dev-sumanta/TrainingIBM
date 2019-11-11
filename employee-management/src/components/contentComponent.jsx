import React from "react";

var colorValue = "red"

var componentStyling = {
    h2: {
        "color": colorValue,
        "margin-left": "50px",
        "border": "1px solid green"
    }, h3: {
        "color": "grey"
    }
}

export default function ContentComponent(props) {
    props.user.name = "Anshul"
    return (
        <div>
            <h2 style={componentStyling.h2}>Content Page..{props.user.name}{props.userage}</h2>
            <h3 style={componentStyling.h3}>Hello This is Component..</h3>
        </div>
    )
}