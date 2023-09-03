import {Link} from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import {MdFoodBank} from 'react-icons/md';
import {IoMdMenu} from 'react-icons/io';
import { SidebarContext } from '../../context/sidebarContatext';
import "./Header.css";

const Navbar = () => {
    const {openSidebar} = useContext(SidebarContext);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 60){
            setScrolled(true);
        } else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);


    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className='navbar-container'>
                    <div className='navbar-content'>
                        <div className='brand-and-toggler'>
                            <Link to="/" className='navbar-brand'>
                                <MdFoodBank/>
                                <span>FastEat</span>
                            </Link>
                            <div className="navbar-btns">
                                <button type='button' className='navbar-show-btn' onClick={()=> openSidebar()}>
                                    <IoMdMenu/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar