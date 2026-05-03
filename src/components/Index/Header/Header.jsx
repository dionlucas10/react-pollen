import './Header.css';
import { AuthButtons } from "./AuthButtons";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export function Header({ onLoginClick }) {
    return (
        <header className="header"> 
            <Logo />
            <NavLinks className="nav-links desktop-only" />
            <AuthButtons className="auth-buttons desktop-only" onButtonClick={onLoginClick} />
            <AuthButtons className="auth-buttons mobile-only" onButtonClick={onLoginClick} />
        </header>
    )
}