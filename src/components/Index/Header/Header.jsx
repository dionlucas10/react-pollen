import './Header.css';
import { AuthButtons } from "./AuthButtons";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export function Header() {
    return (
        <header className="header"> 
            <Logo />
            <NavLinks className="nav-links desktop-only" />
            <AuthButtons className="auth-buttons desktop-only" />
            <AuthButtons className="auth-buttons mobile-only" />
        </header>
    )
}