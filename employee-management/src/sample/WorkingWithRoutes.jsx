import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";

export default class WorkingWithRoutes extends React.Component {

    render() {
        return (
            <BrowserRouter>
            
                <div>

                    <nav>
                        <Link style={{paddingLeft: "15px"}} to="/home/20">Home</Link>
                        <Link style={{paddingLeft: "15px"}} to="/help">Help</Link>
                        <Link style={{paddingLeft: "15px"}} to="/">About</Link>
                    </nav>

                    <div>

                    <Route exact path="/" component={AboutComponent}></Route>
                        <Route exact path="/home/:id" component={HomeComponent}></Route>
                        <Route exact path="/help" component={HelpComponent}></Route>
                        
                    </div>

                </div>
            
            </BrowserRouter>
        )
    }
}

function HomeComponent(props) {

    function RedirectPage() {
        props.history.push("/help")
    }
    
    return (
        <div>
            <b>This is Home Page</b>
            <Route exact path="/home/10" component={TenComponent} />
            <Route exact path="/home/20" component={TwentyComponent} />
            <input type="button" value="click" onClick={RedirectPage} />
        </div>
    )
}


function HelpComponent() {
    return (
        <div>
            <p>This is Help Page</p>
        </div>
    )
}


function AboutComponent() {
    return <div>This is About Page</div>
}

function TenComponent() {
    return <div>This is Ten Page</div>
}
function TwentyComponent() {
    return <div>This is Twenty Page</div>
}