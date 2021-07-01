import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { Button } from "react-bootstrap";

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async event => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email, password: formState.password,
                firstName: formState.firstName, lastName: formState.lastName
            }
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <div>

            <Link className="d-flex justify-content-center login-layout login-link" to="/login">
                ← Go to Login
            </Link>

            <h2 className="d-flex justify-content-center" style={{color: "rgb(255, 136, 0)"}}>Signup</h2>

            <form onSubmit={handleFormSubmit}>

                <div className="d-flex justify-content-center login-layout">
                    <label style={{
                        color: "rgb(255, 136, 0)",
                        marginRight: "1rem"
                        }} htmlFor="firstName">First Name:</label>
                    <input
                        placeholder="First"
                        name="firstName"
                        type="firstName"
                        id="firstName"
                        onChange={handleChange}
                    />
                </div>

                <div className="d-flex justify-content-center login-layout">
                    <label style={{
                        color: "rgb(255, 136, 0)",
                        marginRight: "1rem"
                        }} htmlFor="lastName">Last Name:</label>
                    <input
                        placeholder="Last"
                        name="lastName"
                        type="lastName"
                        id="lastName"
                        onChange={handleChange}
                    />
                </div>

                <div className="d-flex justify-content-center login-layout">
                    <label style={{
                        color: "rgb(255, 136, 0)",
                        marginRight: "1rem"
                        }} htmlFor="email">Email:</label>
                    <input
                        placeholder="youremail@test.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>

                <div className="d-flex justify-content-center login-layout">
                    <label style={{
                        color: "rgb(255, 136, 0)",
                        marginRight: "1rem"
                        }} htmlFor="pwd">Password:</label>
                    <input
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                    />
                </div>

                <div className="d-flex justify-content-center login-layout">
                    <Button className="button-primary" type="submit">
                        Submit
                    </Button>
                </div>

            </form>
        </div>
    );

}

export default Signup;