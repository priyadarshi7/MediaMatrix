import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import AboutMediaMatrix from './components/AboutMediaMatrix.jsx';
import HomeAnimation from './components/HomeAnimation.jsx';
import LoadingPage from './components/LoadingPage.jsx';
import LogoName from './components/Home/LogoName/LogoName.jsx';
import Navbar from './components/Navbar.jsx';
import Tracks from './components/Home/Tracks/Tracks.jsx';
import './Home.css';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [blackBackground, setBlackBackground] = useState(false);
    const [animationFinished, setAnimationFinished] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        AOS.init({ duration: 1000 });
        
        return () => clearTimeout(timer);
    }, []);

    const onAnimationComplete = () => {
        setAnimationFinished(true);
        setBlackBackground(false);
    };

    return (
        <div className="home" style={{ 
            position: 'relative', 
            backgroundColor: blackBackground ? 'black' : '', 
            transition: 'background-color 1s ease', 
            width: "100%",
            height:"100svh"
        }}>
            {loading ? (
                <LoadingPage />  
            ) : (
                <>
                    <Navbar />
                    {animationFinished === false && (
                        <HomeAnimation setBlackBackground={setBlackBackground} onAnimationComplete={onAnimationComplete}/>
                    )}
                    ( {animationFinished &&
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <LogoName />
                            <AboutMediaMatrix />
                            {/* <div className="tracks-logo" data-aos='fade-down' style={{marginTop: '3rem', marginBottom: '3rem'}}>
        `                       <img src="src\assets\TracksHeading.png" style={{ height: '15rem', width: '30rem'}} alt="Tracks Logo" />
                            </div> */}
                            <div className="track-text">
                                TRACKS
                            </div>
                            <div className="marquee">
                            <Tracks/>
                            </div>
                        </div>
                    }
                    )
                </>
            )}
        </div>
    );
}