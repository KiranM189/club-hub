import React from "react"

const SignUp = () => {
    return(
        <div>
            <h1>SignUp</h1>
            <div>
                <label>Email</label>
                <input type="text" placeholder="Your email"></input>
            </div>
            <div>
                <label>Password</label>
                <input type="text" placeholder="Your password"></input>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </div>
    );
}

export default SignUp