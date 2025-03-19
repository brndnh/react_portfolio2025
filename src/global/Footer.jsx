import "./Footer.css"
import { LogoInstagram, LogoGithub, MailOutline } from 'react-ionicons';

function Footer() {
    return (
        <footer>
            <div className="container">

                <div className="grid">

                    <div className="col-12 col-4-lg">

                    </div>
                    <div className="col-12 col-4-lg">
                        <div className="works-footer">
                            <p className="copyright">c. 2025 taito</p>
                            <div className="social-icons">
                                <a href="instagram.com/" target="_blank"><LogoInstagram color={"#000"} height="40px" width="40px" /></a>
                                <a href="github.com/brndnh" target="_blank"><LogoGithub color={"#000"} height="40px" width="40px" /></a>
                                <a href="mailto:hxynhs@gmail.com" target="_blank"><MailOutline color={"#000"} height="40px" width="40px" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-4-lg">

                    </div>

                </div>

            </div>
        </footer>
    );

}

export default Footer;
