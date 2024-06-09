import '../Css/Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="container-login">
            <div className="form-box">
                <h1 id="title">Sign In</h1>
                <form>
                    <div className="input-group">
                        <div className="signup-input-field" id="NameField">
                            <i></i>
                            <input className="signup" type="text" placeholder="Name" />
                        </div>
                        <div className="input-field">
                            <i></i>
                            <input className="signup" type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i></i>
                            <input  className="signup"type="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="btn-field">
                    <button type="button" id="signinBtn"><Link to="/Login">Log In</Link></button>
                  <button type="button" id="signinBtn"><Link to="/SignUp">Sign Up</Link></button>
                 
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
