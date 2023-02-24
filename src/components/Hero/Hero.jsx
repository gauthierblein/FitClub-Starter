import './Hero.css'
import Header from '../Header/Header'
import hero_image from'../../assets/hero_image.png'
import hero_image_back from'../../assets/hero_image_back.png'
import Heart from'../../assets/heart.png'
import Calories from'../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
    const tagLine = "In here, we will help you to shape & build your ideal body and live up your life to fullest"
    const mobile = window.innerWidth <= 768 ? true : false;
    const transition = {type: 'spring', duration: 3}
    
    return (
        <div className='hero' id='home'>

            <div className='blur hero-blur'></div>
            <div className='left-h'>
                <Header />

                {/* The Best Add */}
                <div className='the-best-add'>
                    <motion.div
                        initial={{left: mobile? '165px' :'238px'}}
                        whileInView={{left: '8px'}}
                        transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    <span>The Best Fitness Club is the town</span>
                </div>

                {/* Hero Heading */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>SHAPE </span>
                        <span>YOUR</span>
                    </div>
                    <div><span>IDEAL BODY</span></div>
                    <div><span className='tagLine'>{tagLine}</span></div>
                </div>

                {/* Figures */}
                <div className='figures'>
                    <div>
                        <span><NumberCounter end={140} start={100} delay='4' preFix ="+" /></span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>+ 978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* Hero Buttons */}
                <div className='hero-buttons'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>


            </div>
                


            <div className='right-h'>
                <button className='btn'>Join Now</button>
                <motion.div 
                    initial={{right:"-1rem"}}
                    whileInView={{right:"4rem"}}
                    transition={transition}
                    className='heart-rate'>
                        <img src={Heart} alt="heart" />
                        <span>Heart Rate</span><span>116 bpm</span>
                </motion.div>
                {/* Hero Buttons */}
                <img src={hero_image} alt="hero_image" className='hero_img'/>
                <motion.img 
                    initial={{right:"11rem"}}
                    whileInView={{right:"22rem"}}
                    transition={transition}  
                    src={hero_image_back} alt="hero_image_back" 
                    className='hero_img_back'/>
                {/* Calories */}
                <motion.div 
                    initial={{right:"37rem"}}
                    whileInView={{right:"28rem"}}
                    transition={transition}                    
                    className='calories'>
                        <img src={Calories} alt="calories" />
                        <div>
                            <span>Calories burned</span><span>220 Kcal</span>
                        </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero