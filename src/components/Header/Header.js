import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { doLogout } from '../../redux/action/userAction';
import { toast } from 'react-toastify';

const Header = () => {
    // navigate
    const navigate = useNavigate();

    // redux
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const account = useSelector(state => state.user.account);
    const dispatch = useDispatch();

    // function con
    const handleLogin = () => {
        navigate('/login');
    };

    const handleSignUp = () => {
        navigate('/register');
    };

    const handleLogout = () => {
        navigate('/login');
        toast.success('You have successfully logged out!');
    };
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/" className='navbar-brand'>Hỏi Dân IT</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/users" className='nav-link'>User</NavLink>
                        <NavLink to="/admin" className='nav-link'>Admin</NavLink>

                    </Nav>
                    <Nav>
                        {!isAuthenticated ?
                            <>
                                <button className='btn-login' onClick={() => { handleLogin() }}>Login</button>
                                <button className='btn-signup' onClick={() => { handleSignUp() }}>Sign up</button>
                            </>
                            :
                            <NavDropdown title="Settings" id="basic-nav-dropdown">
                                <NavDropdown.Item
                                    onClick={() => {
                                        dispatch(doLogout())
                                        handleLogout()
                                    }}
                                >
                                    Logout
                                </NavDropdown.Item>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </NavDropdown>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;