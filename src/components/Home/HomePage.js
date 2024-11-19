import VideoHomePage from '../../assets/video-homepage.webm';
import { useSelector } from 'react-redux';
import ListQuiz from '../User/ListQuiz';
import { useNavigate } from 'react-router-dom';
const HomePage = (props) => {
    // navigate
    const navigate = useNavigate();

    // redux
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const account = useSelector(state => state.user.account);

    // function
    const handleListQuiz = () => {
        navigate('/users');
    };
    const handleNotLogin = () => {
        navigate('/login');
    }
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source
                    src={VideoHomePage}
                    type="video/webm"
                />
            </video>
            <div className='homepage-content'>
                <div className='first-title'>
                    QUIZ
                </div>
                <div className='second-title'>
                    Doing quiz on website
                </div>
                <div className='third-title'>
                    {isAuthenticated ?
                        <button className='button' onClick={() => { handleListQuiz() }}>Doing Quiz Now</button>
                        :
                        <button className='button' onClick={() => { handleNotLogin() }}>Let's Start. It's free</button>
                    }
                </div>
            </div>
        </div>
    );
};
export default HomePage;