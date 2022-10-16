import React from "react"
import ReactDom from "react-dom"
import "./style.css"
import { App } from "./App"

function index() {
    return (
        <div>
            <App />
        </div>
    )
}

ReactDom.render(index(), document.getElementById("root"))
