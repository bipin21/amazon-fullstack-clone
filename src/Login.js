import React, { useState } from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = event => {
        event.preventDefault();
        // this stops the refresh
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
    }

    const register = event => {
        event.preventDefault();
        // this stops the refresh

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //  if user is created successfully
                if (auth) {
                    history.push('/');
                }

            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="amazon1.png" alt="" />
            </Link>

            <div className="login__container" >
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
                    <button onClick={login} type="submit" className="login__signinButton">Sign In</button>
                </form>
                <p>By signing in you agree to Amazon's Conditions of Use & Sale.
                Please see our privacy Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
