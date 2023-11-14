import { Navbar } from 'flowbite-react';
import miraj from '../assets/react.svg';
import { NavLink } from 'react-router-dom';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useState } from 'react';

export default function DefaultNavbar() {
    const htmlClass = document.querySelector('html').classList;
    const [btnIcont, setBtnIcon] = useState(<BsFillMoonFill />);
    const changeMode = () => {
        htmlClass.toggle('dark');
        if (htmlClass.contains('dark')) {
            setBtnIcon(<BsFillSunFill />);
        } else {
            setBtnIcon(<BsFillMoonFill />);
        }
    }
    return (
        <Navbar fluid className='dark:text-white'>
            <Navbar.Brand href="https://flowbite-react.com">
                <img src={miraj} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Toyota</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-600" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-600" : ""
                    }
                >
                    About Us
                </NavLink>
                <NavLink
                    to="/services"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-600" : ""
                    }
                >
                    Services
                </NavLink>
                <NavLink
                    to="/pricing"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-600" : ""
                    }
                >
                    Pricing
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-600" : ""
                    }
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/access"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-600" : ""
                    }
                >
                    Sign-in/Sign-up
                </NavLink>
                <button onClick={() => changeMode()}>
                    {btnIcont}
                </button>
            </Navbar.Collapse>
        </Navbar>
    )
}