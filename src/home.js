import { Component } from "react";
import Movies from "./movies";
import TV from "./tv";

export default class Home extends  Component {
    render() {
        return <div>
            <Movies/>
            <TV/>

        </div>
        
    }
}