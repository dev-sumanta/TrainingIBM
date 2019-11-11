import React from "react";

import HeaderComponent from "./headerComponent"
import FooterComponent from "./footerComponent"
import ContentComponent from "./contentComponent"

export default function ContainerComponent(props) {
    return (
        <div>
            <div>
                <h1>{props.user.name}... Age {props.user.age}</h1>
                <HeaderComponent></HeaderComponent>
                <ContentComponent user={props.user} userage="40"></ContentComponent>
                <FooterComponent></FooterComponent>
            </div>
        </div>
    );
}