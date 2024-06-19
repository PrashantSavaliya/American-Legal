import React, { useState, useEffect, useRef } from "react";
import logo from '../../assets/logo.svg';
import "./Navbar.css";
import { FaCaretDown, FaGlobe } from "react-icons/fa";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";

function Navbar() {
    const [nav, setNav] = useState(false);
    const [languageDropdown, setLanguageDropdown] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState(null);
    const [currentLanguage, setCurrentLanguage] = useState("English"); // State for current language
    const languageRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setLanguageDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [languageRef]);

    const toggleMenu = (menu) => {
        setExpandedMenu(expandedMenu === menu ? null : menu);
    };

    const handleLanguageChange = (language) => {
        setCurrentLanguage(language);
        setLanguageDropdown(false);
    };

    return (
        <div className="navbar-section container">
            <div className="navbar-title">
                <img src={logo} alt=" Logo" className="navbar-logo" />
            </div>

            {/* Desktop  */}
            <ul className="navbar-items">
                <li className="navbar-dropdown">
                    <span>
                        For Individuals <FaCaretDown />
                    </span>
                    <ul className="dropdown-menu">
                        <li>Popular Services</li>
                        <li>How it works</li>
                        <li>Why Us</li>
                        <li>Testimonials</li>
                    </ul>
                </li>
                <li className="navbar-dropdown">
                    <span>
                        For Business Owners <FaCaretDown />
                    </span>
                    <ul className="dropdown-menu">
                        <li>Start Your Business</li>
                        <li>Help Me Choose</li>
                        <li>Create A Contract</li>
                        <li>Our Packages</li>
                        <li>LLC VS Corporation</li>
                    </ul>
                </li>
            </ul>

            <div className="nav-btn" style={{ display: "flex" }} ref={languageRef}>
                <div className="navbar-btn0" onClick={() => setLanguageDropdown(!languageDropdown)}>
                    <FaGlobe /> {currentLanguage} <FaCaretDown />
                    {languageDropdown && (
                        <ul className="dropdown-menu language-menu">
                            <li><button onClick={() => handleLanguageChange('English')}>English</button></li>
                            <li><button onClick={() => handleLanguageChange('Spanish')}>Spanish</button></li>
                        </ul>
                    )}
                </div>
                <button className="navbar-btn1 btn" type="button" onClick={() => setNav(false)}>Log In</button>
                {/*  Hamburger Icon for Mobile  */}
                <div className="mobile-nav" onClick={() => setNav(!nav)}>
                    <MdMenu className="hamb-icon" />
                </div>
            </div>



            {/* Mobile  */}
            <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
                <img src={logo} alt="" />
                <div onClick={() => setNav(!nav)} className="mobile-navbar-close">
                    <MdOutlineClose className="hamb-icon" />
                </div>

                <ul className="mobile-navbar-links">
                    <li onClick={() => toggleMenu('individuals')} className={expandedMenu === 'individuals' ? 'active' : ''}>
                        <div>
                            For Individuals <span>{expandedMenu === 'individuals' ? <FiArrowUpRight className="upright" /> : <FiArrowDownRight className="downright" />}</span>
                        </div>
                        {expandedMenu === 'individuals' && (
                            <ul className="dropdown-menu-mobile">
                                <li onClick={() => setNav(false)}>Popular Services</li>
                                <li onClick={() => setNav(false)}>How it works</li>
                                <li onClick={() => setNav(false)}>Why Us</li>
                                <li onClick={() => setNav(false)}>Testimonials</li>
                            </ul>
                        )}
                    </li>
                    <li onClick={() => toggleMenu('business')} className={expandedMenu === 'business' ? 'active' : ''}>
                        <div>
                            For Business Owners {expandedMenu === 'business' ? <FiArrowUpRight className="upright" /> : <FiArrowDownRight className="downright" />}
                        </div>
                        {expandedMenu === 'business' && (
                            <ul className="dropdown-menu-mobile">
                                <li onClick={() => setNav(false)}>Start Your Business</li>
                                <li onClick={() => setNav(false)}>Help Me Choose</li>
                                <li onClick={() => setNav(false)}>Create A Contract</li>
                                <li onClick={() => setNav(false)}>Our Packages</li>
                                <li onClick={() => setNav(false)}>LLC VS Corporation</li>
                            </ul>
                        )}
                    </li>
                    <li onClick={() => setNav(false)}>About Us</li>
                    <li onClick={() => setNav(false)}>FAQs</li>
                    <li onClick={() => setNav(false)}>Contacts</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
