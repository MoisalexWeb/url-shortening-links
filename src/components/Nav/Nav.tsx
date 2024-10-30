import './Nav.scss'
import logo from '/images/logo.svg'
import { useMobileMenu } from '../../hooks/useMobileMenu'
import { MenuLink } from './MenuLink'

export const Nav = () => {
    const { showMobileMenu, toggleMenu, closeMenu } = useMobileMenu()

    return (
        <header className={`header ${showMobileMenu ? 'show-menu' : ''}`}>
            <nav className="nav">
                <img src={logo} alt="Shortly logo" className="nav-logo" />

                <div className="nav__links">
                    <ul className="nav__links__ul">
                        <MenuLink   
                            href='#'
                            text='features'
                            onClick={closeMenu}
                        />
                        <MenuLink   
                            href='#'
                            text='pricing'
                            onClick={closeMenu}
                        />
                        <MenuLink   
                            href='#'
                            text='resources'
                            onClick={closeMenu}
                        />
                    </ul>

                    <div className="nav__links__cta">
                        <a href="#" className="nav__links__cta-login" onClick={closeMenu}>login</a>
                        <a href="#" className="nav__links__cta-sign" onClick={closeMenu}>sign up</a>
                    </div>
                </div>

                <button 
                    className="nav__hamburger" 
                    aria-label='Open/close mobile menu'
                    onClick={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path></svg>
                </button>
            </nav>
        </header>
    )
}
