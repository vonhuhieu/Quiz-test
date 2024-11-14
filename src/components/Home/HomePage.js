import VideoHomePage from '../../assets/video-homepage.webm'
const HomePage = (props) => {
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