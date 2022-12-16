import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from "./App"

ReactDOM.render(
    
    <App/>,
    document.getElementById("root"));


serviceWorkerRegistration.register();