import "./Header.css";

function Header() {

    return (
        <header>
            <div className="container">
                <div className="grid">

                    <div className="col-3">
                        LOGO GOES HERE
                    </div>

                    <div className="col-9 header-menu">
                        MENU GOES HERE
                    </div>

                </div>
            </div>
        </header>
    );

}

export default Header;