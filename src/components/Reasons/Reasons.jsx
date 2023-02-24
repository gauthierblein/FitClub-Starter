import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'




const Reasons = () => {
    return (
        <div className='Reasons' id="reasons"> 
            <div className='left-r'>
                <img src={image1} alt="" />
                <div className='reasons-img-bloc'>
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                </div>
            </div>
            <div className='right-r'>
                <span className='some-reasons'>some reasons</span>
                <div>
                    <span className='stroke-text'>why</span>
                    <span> choose us?</span>
                </div>

                <div className='details-r'>
                    <div>
                        <img src={tick} alt="" />
                        <span className='details-r-text'>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span className='details-r-text'>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span className='details-r-text'>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span className='details-r-text'>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span className='details-r-partners'>OUR PARTNERS</span>
                <div className='partners'>
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons