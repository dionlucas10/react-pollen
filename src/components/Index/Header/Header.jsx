import './Header.css';
import { useState } from 'react';
import { AuthButtons } from "./AuthButtons";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header"> 
            <Logo />
            <NavLinks className="nav-links desktop-only" />
            <AuthButtons className="auth-buttons desktop-only" />
            <button className={`hamburger mobile-only ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`mobile-menu mobile-only ${isMenuOpen ? 'open' : ''}`}>
                <NavLinks />
                <AuthButtons />
            </div>
        </header>
    )
}