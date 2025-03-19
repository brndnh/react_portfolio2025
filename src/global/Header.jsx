import "./Header.css";
import logo from '../assets/logo.png'

function Header() {
    return (
        <header>
            <div className="container">
                <div className="grid">

                    <div className="col-3">
                        <img class="logo" src={logo} alt="" />
                    </div>

                    <div className="col-9 header-menu">
                        <nav>
                            <ul className="nav-list">
                                <li><a href="/">home</a></li>
                                <li><a href="/about">about</a></li>
                                <li><a href="/blog">blog</a></li>
                                <li><a href="/works">works</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;