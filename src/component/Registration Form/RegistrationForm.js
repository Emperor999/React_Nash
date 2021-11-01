import React, { Component, useState } from "react";
import "./Regis.css";

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const nameRegex = RegExp(
    /^[a-zA-Z0-9]*$/
);

  
       
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            email: null,
            password: null,
            repeatpassword: null,
            formErrors: {
                username: "",
                lastName: "",
                email: "",
                password: "",
                repeatpassword: ""
            }
        };
    }
    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)&& document.getElementById("cb1").checked==true) {
            console.log(`
        --SUBMITTING--
        Username: ${this.state.firstName}
        Email: ${this.state.email}
        Password: ${this.state.password}
        RepeatPass:${this.state.repeatpassword}
      `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };
    
    
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "username":
                formErrors.username =
                    (value.length < 4) || (!nameRegex.test(value)) ? "At least 4 characters :a-z,A-Z,0-9" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 8 ? "At least 8 charcters" : "";

                break;
            case "repeatpassword":
                formErrors.repeatpassword =
                    (value != this.state.password) ? "Not match" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };


    render() {

        const { formErrors } = this.state;
        
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Registration Form</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="firstName">
                            <label htmlFor="firstName">Username</label>
                            <input
                                className={formErrors.username.length > 0 ? "error" : null}
                                placeholder="Username"
                                type="text"
                                name="username"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.username.length > 0 && (
                                <span className="errorMessage">{formErrors.username}</span>
                            )}
                        </div>
                        <div className="gender">
                            <label htmlFor="firstname">Gender</label>
                            <select>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                className={formErrors.email.length > 0 ? "error" : null}
                                placeholder="Email"
                                type="email"
                                name="email"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                className={formErrors.password.length > 0 ? "error" : null}
                                placeholder="Password"
                                type="password"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.password.length > 0 && (
                                <span className="errorMessage">{formErrors.password}</span>
                            )}
                        </div>
                        <div className="password">
                            <label htmlFor="repeatpassword">Repeat Password</label>
                            <input
                                className={formErrors.repeatpassword != formErrors.password ? "error" : null}
                                placeholder="Enter your passwowrd again"
                                type="password"
                                name="repeatpassword"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.repeatpassword.length > 0 && (
                                <span className="errorMessage">{formErrors.repeatpassword}</span>
                            )}
                        </div>
                        <div>
                            <input
                            id ="cb1" 
                            type="checkbox" /> I have read aggrement
                        </div>
                        <div className="createAccount">
                            <button type="submit">Sign up</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        );
    }
}

export default RegistrationForm;
