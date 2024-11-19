import VideoHomePage from '../../assets/video-homepage.webm';
import { useSelector } from 'react-redux';
const HomePage = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const account = useSelector(state => state.user.account);
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
                    Create a UI with bootstrap
                </div>
                <div className='second-title'>
                    CSS in the web
                </div>
                <div className='third-title'>
                    <button className='button'>Let's go</button>
                </div>
            </div>
        </div>
    );
};
export default HomePage;