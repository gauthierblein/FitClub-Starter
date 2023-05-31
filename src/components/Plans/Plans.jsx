import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'



const Plans = () => {
    return (
        <div className='plans-container' id='plans'>
            <div className='blur plans-blur1'></div>
            <div className='blur plans-blur2'></div>
            <div className='programs-header' style={{gap: '1rem'}}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>

            <div className='plans '>
            {plansData.map((plan, index) => (
                 <div className="plan" key={index}>
                    {plan.icon}
                    <span>{plan.name}</span><span>$ {plan.price}</span>
                    <div className='features'>
                    {plan.features.map((feature, i) => (
                        <div key={i}>
                            <img src={whiteTick} alt="" />
                            <span>{feature}</span>
                        </div>
                    ))}
                    </div>
                    <div>
                        <span>See more benefits -&gt; </span>
                    </div>
                    <button className='btn'>Join Now</button>
                </div>
            ))}
            </div>

        </div>
        
    )
}

export default Plans