import './Register.scss';
import { IoMdHome } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import Validate from '../Validate/Validate';
import { postRegister } from '../../services/apiServices';
import { toast } from 'react-toastify';
import { IoEyeOff } from "react-icons/io5";


const Register = (props) => {
    // state
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        username: '',
    });

    const [showPassWord, setShowPassword] = useState(false);

    const [errors, setErrors] = useState({});
    // effect 

    // navigate
    const navigate = useNavigate();

    // function con
    const handleHome = () => {
        navigate('/');
    };
    const handleLogin = () => {
        navigate('/login');
    };

    const handleInput = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({
            ...prevInputs, [name]: value,
        }));
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassWord);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let errorsSubmit = {};
        let check_validate = true;
        if (inputs.email == "" || !validateEmail(inputs.email)) {
            check_validate = false;
            errorsSubmit.email = "Invalid email";
        }
        if (inputs.password == "") {
            check_validate = false;
            errorsSubmit.password = "Password must not be empty";
        }
        if (inputs.username == "") {
            check_validate = false;
            errorsSubmit.username = "Username must not be empty";
        }
        setErrors(errorsSubmit);
        if (check_validate == true) {
            let response = await postRegister(inputs.email, inputs.username, inputs.password);
            if (response && response.EC === 0) {
                toast.success(response.EM);
                navigate('/login');
            }
            else if (response && response.EC !== 0) {
                toast.error(response.EM);
            }
            else {
                toast.error("No response from server");
            }
        }
    };

    return (
        <div className="login-container">
            <div className='header'>
                <span>Do you have an account yet?</span>
                <button onClick={() => { handleLogin() }}>Sign in</button>
            </div>
            <div className='title col-4 mx-auto'>
                HoiDanIT & Eric
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who's this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <span style={{ color: "red" }}> (*)</span><span>: This field is required</span>
                <Validate errors={errors} />
                <form onSubmit={(event) => { handleSubmit(event) }}>
                    <div className='form-group'>
                        <label>Email</label><span style={{ color: "red" }}> (*)</span>
                        <input className='form-control'
                            type='email'
                            name='email'
                            value={inputs.email}
                            onChange={(event) => { handleInput(event) }}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password</label><span style={{ color: "red" }}> (*)</span>
                        <div className='input-password'>
                            {!showPassWord ?
                                <input className='form-control'
                                    type='password'
                                    name='password'
                                    value={inputs.password}
                                    onChange={(event) => { handleInput(event) }}
                                />
                                :
                                <input className='form-control'
                                    type='text'
                                    name='password'
                                    value={inputs.password}
                                    onChange={(event) => { handleInput(event) }}
                                />
                            }
                            {!showPassWord ?
                                <FaEye onClick={() => { handleShowPassword() }} />
                                :
                                <IoEyeOff onClick={() => { handleShowPassword() }} />
                            }
                        </div>
                    </div>
                    <div className='form-group'>
                        <label>Username</label><span style={{ color: "red" }}> (*)</span>
                        <input className='form-control'
                            type='text'
                            name='username'
                            value={inputs.username}
                            onChange={(event) => { handleInput(event) }}
                        />
                    </div>
                    <span className='forgot-password'>Forgot password?</span>
                    <div>
                        <button className='btn-submit'>Sign up</button>
                    </div>
                </form>
            </div>

            <div className='back col-12'>
                <span onClick={() => { handleHome() }}>
                    <IoMdHome />Go to Homepage
                </span>
            </div>
        </div>
    );
};

export default Register;