import React from 'react';
import '../Css/Signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="container-signup">
        <div className="form-box">
            <h1 id="title">Sign Up</h1>
            <form className="signUp-Form">
                <div className="input-group">
                    <div className="signup-input-field" id="NameField">
                       <i></i>
                       <input type="text" placeholder="Name" ></input>
                    </div>
                    <div className="input-field">
                       <i></i>
                       <input type="email" placeholder="Email"></input>
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
};

export default Signup;
