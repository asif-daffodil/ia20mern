import { Navbar } from 'flowbite-react';
import miraj from '../assets/react.svg';
import { NavLink } from 'react-router-dom';

export default function DefaultNavbar() {
    return (
        <Navbar fluid rounded>
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
            </Navbar.Collapse>
        </Navbar>
    )
}