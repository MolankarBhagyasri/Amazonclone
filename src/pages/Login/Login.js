import React,{useState} from 'react'
import "./Login.css";
import {Link} from "react-router-dom";
import AmazonLogo from '../../Amazon_Logo.png'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();
    };
    return (
        <div className="login">
            <Link to="/">
                <img src={AmazonLogo} className="login-logo" alt="logo" />
                </Link>
            <div className="login-container">
                <h4>Sign In</h4>
                <form>
                    <h4>E-Mail</h4>
                    <input type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h4>password</h4>
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" onClick={signIn} className="login-signIn">
                    Sign In
                    </button>
                    </form>
                    <div className="detail">
                    <p>By continuing,You're agreed to Amzon's Conditions of use and privacy notice.
                        </p>
                        <p>New to Amazon</p>
                    <Link to="/register" >
                        <button className="login-register">Create Your Account</button>
                        </Link>
                    </div>  
            </div>
            
        </div>
    )
}

export default Login
