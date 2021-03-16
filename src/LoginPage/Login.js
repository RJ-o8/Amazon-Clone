import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import './Login.css'
import {auth} from '../firebase'

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();

    const login = (event)=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //loged in redirecting to home
            history.push('/')
        })
        .catch(e=>alert(e.message))
    }
    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //crated logedin and redirect to home
            history.push('/')

        })
        .catch((e)=> alert(e.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="" id=""/>
                    <h5>Password</h5>
                    <input value={password} onChange={e=>setPassword(e.target.value)} type="password" name="" id=""/>
                    <button type="submit" onClick={login} className="signinButton">Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                    </p>
                <button onClick={register} className="registerButton">Create your Account</button>

            </div>
        </div>
    )
}

export default Login
