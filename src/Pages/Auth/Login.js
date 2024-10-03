import React from "react"

const Login = () => {
    return(
        <div>
            <h1>Login</h1>
            <div>
                <label>Email</label>
                <input type="text" placeholder="Your email"></input>
            </div>
            <div>
                <label>Password</label>
                <input type="text" placeholder="Your password"></input>
            </div>
        </div>
    );
}

export default Login