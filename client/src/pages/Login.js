import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' })
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e)
        }
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

            <Link className="d-flex justify-content-center login-layout login-link" to="/signup">
                ← Go to Signup
            </Link>

            <h2 className="d-flex justify-content-center" style={{color: "rgb(255, 136, 0)"}}>Login</h2>

            <form onSubmit={handleFormSubmit}>

                <div className="d-flex justify-content-center login-layout">
                    <label style={{
                        color: "rgb(255, 136, 0)",
                        marginRight: "1rem"
                        }} htmlFor="email">Email address:</label>
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

                {
                    error ? <div>
                        <p className="error-text" >The provided credentials are invalid.</p>
                    </div> : null
                }

                <div className="d-flex justify-content-center login-layout">
                    <Button className="button-primary" type="submit">
                        Submit
                    </Button>
                </div>
                
            </form>
        </div>
    );
}


export default Login;