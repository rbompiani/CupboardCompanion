import React from 'react';
import './login.css';

function Login () {
    return (
        <div className="Login">
            <header className="Login-header">
                <h1>Please log in!</h1>
                <a class ="google-btn" href="/auth/google">Google+</a>
            </header>
        </div>
    )
}

export default Login;