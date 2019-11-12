import React from "react";

export default function HigherOrderComponent(WrapperComponent) {
    return class  extends React.Component {
        constructor() {
            super();
            this.state =  {
                name: "Mayank",
                age: 30
            }
        }
    
        render() {
            return <WrapperComponent {...this.state} />
        }
    }
}