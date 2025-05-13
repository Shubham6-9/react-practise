import React, { useState } from 'react';
import Cookies from 'js-cookie'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handlePlusClick = () => {
        setShowDropdown(!showDropdown);
    };

    const storage = (option) => {
        let obj = {
            uname: username,
            pass: password
        }
        if (option == 'l') {
            localStorage.setItem("credentials", JSON.stringify(obj));
        } else if (option == 's') {
            sessionStorage.setItem("credentials", JSON.stringify(obj));
        } else {
            Cookies.set("credentials", obj, {
                expires: 1
            })
        }
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form">
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                    <div className="plus-button-container">
                        <button
                            type="button"
                            className="plus-button"
                            onClick={handlePlusClick}
                        >
                            +
                        </button>
                        {showDropdown && (
                            <div className="dropdown-menu">
                                <div
                                    className="dropdown-item"
                                    onClick={() => storage('l')}
                                >
                                    Local
                                </div>
                                <div
                                    className="dropdown-item"
                                    onClick={() => storage('s')}
                                >
                                    Session
                                </div>
                                <div
                                    className="dropdown-item"
                                    onClick={() => storage('c')}
                                >
                                    Cookie
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </form>

            {selectedOption && (
                <div className="selected-option">
                    Selected: {selectedOption}
                </div>
            )}
        </div>
    );
};

export default Login;