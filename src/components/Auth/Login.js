import { useState } from 'react';
import './Login.scss';
import Validate from '../Validate/Validate';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import { IoMdHome } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiServices';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';
import { FaSpinner } from "react-icons/fa";


const Login = (props) => {
    // state
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const [errors, setErrors] = useState({});

    // navigate
    const navigate = useNavigate();

    // redux
    const dispatch = useDispatch();

    // function con
    const handleHome = () => {
        navigate('/');
    };

    const handleSignUp = () => {
        navigate('/register');
    };
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

    const handleSubmit = async (event) => {
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
            setIsLoading(true);
            let response = await postLogin(inputs.email, inputs.password);
            if (response && response.EC === 0) {
                dispatch(doLogin(response));
                toast.success(response.EM);
                setIsLoading(false);
                navigate('/');
            }
            else if (response && response.EC !== 0) {
                toast.error(response.EM);
                setIsLoading(false);
            }
            else {
                toast.error("No response from server");
            }
        }
    };
    return (
        <div className="login-container">
            <div className='header'>
                <span>Don't have an account yet?</span>
                <button onClick={() => { handleSignUp() }}>Sign up</button>
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
                        <button className='btn-submit' disabled={isLoading}>
                            {isLoading && <FaSpinner className='loader-icon' />}
                            <span>Login</span>
                        </button>
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

export default Login;