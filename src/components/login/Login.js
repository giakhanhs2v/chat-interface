import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Home from "../home/Home";
import "./login.css";
 class Login extends Component{
    
    handelClick =()=>{
    this.props.history.push("/")

    };
    
   
          render() {
    
    
        return(
    <div class="container">
    <div class="row">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
                <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title">
                LOGIN
            </div>

            <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">
                    <form>
                        <div class="form-group">
                            <label class="form-control-label">USERNAME</label>
                            <input type="text" class="form-control"></input>
                        </div>
                        <div class="form-group">
                            <label class="form-control-label">PASSWORD</label>
                            <input type="password" class="form-control" i></input>
                        </div>

                        <div class="col-lg-12 loginbttm">
                            
                            <div class="col-lg-6 login-btm login-button">
                                <button onClick={this.handelClick} class="btn btn-outline-primary">LOGIN</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
        </div>
    </div>  
</div>
);
 }   
}

export default withRouter(Login)

    
