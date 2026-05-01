import './NavLinks.css';

export function NavLinks({ className, onLinkClick }) {
    return (
        <nav className={className}>
            <ul>
                <li><a href="#home" onClick={onLinkClick}>Home</a></li>
                <li><a href="#about" onClick={onLinkClick}>About</a></li>
                <li><a href="#services" onClick={onLinkClick}>Services</a></li>
                <li><a href="#footer" onClick={onLinkClick}>Contact</a></li>
            </ul>
        </nav>
    )
}