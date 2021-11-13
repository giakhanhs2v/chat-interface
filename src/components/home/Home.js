import React, { Component } from "react";

import ChatBody from "../chatBody/ChatBody";
import Nav from"../nav/Nav";
export default class Home extends Component{
    render(){
        return(
            <div className="__main">
                <ChatBody />
                <Nav />
            </div>
        )
    }
}

