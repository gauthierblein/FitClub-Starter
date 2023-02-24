import './Header.css'
import { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'


const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <div className='header' id='header'>
        
            <img src={Logo} alt="logo" className='logo' />
            {(menuOpened===false && mobile===true) ?
            (<div
                style={{backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius:'5px'}}
                onClick={()=>setMenuOpened(true)}
            >
                <img src={Bars} alt= "" style={{width:'1.5rem', lineHeight:'1.5rem'}}/></div>)
            : (
                <ul className='header-menu'>
                    <li><Link
                        onClick={()=>setMenuOpened(false)}
                        to='header'
                        spy={true}
                        smooth={true}
                        >Home</Link></li>
                    <li><Link
                        onClick={()=>setMenuOpened(false)}
                        to='programs'
                        spy={true}
                        smooth={true}
                        >Programs</Link></li>
                    <li><Link
                        onClick={()=>setMenuOpened(false)}
                        to='reasons'
                        spy={true}
                        smooth={true}
                        >Why us</Link></li>
                    <li><Link
                        onClick={()=>setMenuOpened(false)}
                        to='plans'
                        spy={true}
                        smooth={true}
                    
                    >Plans</Link></li>
                    <li><Link
                        onClick={()=>setMenuOpened(false)}
                        to='testimonials'
                        spy={true}
                        smooth={true}
                        >Testimonials</Link></li>
                </ul>
            )}
        </div>
    )
}

export default Header