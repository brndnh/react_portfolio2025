import { NavLink } from 'react-router';
import "./Header.css";
import logo from '../assets/logoBlack.png';
// import logo from '../assets/logoWhite.png';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="grid">

                    <div className="col-1-sm col-2-md col-1">
                        <img className="logo" src={logo} alt="Logo" />
                    </div>

                    <div className="col-11-sm col-9-md col-11 header-menu">
                        <nav>
                            <ul className="nav-list">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                                    >
                                        home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                                    >
                                        about
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/blog"
                                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                                    >
                                        blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/works"
                                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                                    >
                                        works
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
