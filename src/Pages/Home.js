import React from 'react';
import photo from '../Assests/Images/photo.jpeg'
import '../Styles/Page.css'

const Home = () => {
    return (
        <div className='home-back'>
            <div className="home-container">
                <div className='home-left'>
                    <h1>Welcome to my portfolio!</h1>
                    <p>
                    Hello! I am Meerim Azamatova, and I am a web developer creating user-friendly and efficient websites. I specialize in front-end development, focusing on technologies like React.js, HTML, CSS, and JavaScript. My goal is to build websites that are not only visually appealing but also provide an excellent user experience.
                    </p>
                    <button className="cta-button">Get Started</button>
                </div>
                <div className='home-right'>
                    <img
                        src={photo}
                        alt='me'
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
