import { useState } from 'react';
import './Login.scss';
import Validate from '../Validate/Validate';
import { ToastContainer, Bounce } from 'react-toastify';
const Login = (props) => {
    // state
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    // function con
    const handleInput = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({
            ...prevInputs, [name]: value
        }));
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let errorsSubmit = {};
        let check_validate = true;
        if (inputs.email == "" || !validateEmail(inputs.email)) {
            errorsSubmit.email = "Invalid email";
            check_validate = false;
        }
        if (inputs.password == "") {
            errorsSubmit.password = "Password must not be empty";
            check_validate = false;
        }
        setErrors(errorsSubmit);
        if (check_validate == true) {
            setErrors({});
            console.log("User info: ", inputs);
        }
    };
    return (
        <div className="login-container">
            <div className='header'>
                Don't have an account yet?
            </div>
            <div className='title col-4 mx-auto'>
                HoiDanIT & Eric
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who's this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <Validate errors={errors} />
                <form onSubmit={(event) => { handleSubmit(event) }}>
                    <div className='form-group'>
                        <label>Email</label>
                        <input className='form-control'
                            type='email'
                            name='email'
                            value={inputs.email}
                            onChange={(event) => { handleInput(event) }}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input className='form-control'
                            type='password'
                            name='password'
                            value={inputs.password}
                            onChange={(event) => { handleInput(event) }}
                        />
                    </div>
                    <span className='forgot-password'>Forgot password?</span>
                    <div>
                        <button className='btn-submit'>Login</button>
                    </div>
                </form>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};

export default Login;