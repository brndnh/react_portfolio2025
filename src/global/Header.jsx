import { NavLink } from 'react-router';
import "./Header.css";
import logo from '../assets/logoBlack.png';
// import logo from '../assets/logoWhite.png';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="grid">

                    <div className="logo-container col-12-sm col-2-md col-2-lg">
                        <NavLink to="/">
                            <img
                                className="logo"
                                src={logo}
                                alt="taito logo"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                            />
                        </NavLink>
                    </div>

                    <div className="col-11-sm col-9-md col-9-lg header-menu">
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
                                        to="/works"
                                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                                    >
                                        works
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink
                                        to="/blogs"
                                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                                    >
                                        blogs
                                    </NavLink>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
