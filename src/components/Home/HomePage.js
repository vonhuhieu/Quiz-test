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
        </div>
    );
};
export default HomePage;