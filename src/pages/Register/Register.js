import React, { useState ,useEffect} from "react";
import  "./Register.css";
import { Link,useHistory } from "react-router-dom";
import AmazonLogo from "../../Amazon_Logo.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { registerInitiate } from '../../redux/actions';


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const { user } = useSelector(state => state.data);
    

    const history = useHistory();

    useEffect(() => {
        if (user)
            history.push("/");
    }, [user, history]);

    let dispatch = useDispatch();

    const Register = (e)  => {
        e.preventDefault();
        dispatch(registerInitiate(email, password));
        setEmail("");
        setPassword("");
    };
    return (
        <div className="register">
            <Link to="/">
                <img src={AmazonLogo} className="register-logo" alt="img" />
            </Link>
            <div className="register-container">
                <h1>Create Account</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>password</h5>
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" onClick={Register} className="continue">
                        continue
                    </button>
                </form>
                <div className="detail">
                    <p>Already have an account?
                    </p>
                    <Link to="/Login" className="signin-link">
                        <p>Sign In</p>
                    </Link>
                </div>
            </div>
            
        </div>
    );
};
    
export default Register;
