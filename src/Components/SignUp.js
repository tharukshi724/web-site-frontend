import React from 'react';
import '../Css/Signup.css'

const Signup = () => {
  return (
    <div className="container">
        <div className="form-box">
            <h1 id="title">Sign Up</h1>
            <form>
                <div className="input-group">
                    <div className="input-field" id="NameField">
                       <i></i>
                       <input type="text" placeholder="Name" ></input>
                    </div>
                    <div className="input-field">
                       <i></i>
                       <input type="email" placeholder="Email"></input>
                    </div>
                    <div className="input-field">
                       <i></i>
                       <input type="password" placeholder="Password"></input>
                    </div>

                </div>
                <div className="btn-field">
                <button type="button" id="signinBtn"> SignIn</button>
                  <button type="button" id="signinBtn"> SignUp</button>
                 
                </div>
            </form>

        </div>
    </div>
  );
};

export default Signup;
