import "./Home.css";

import homeHeaderImage from '../assets/home_header.png'

function Home() {
    return (
        <>
            <main className="home">
                <div className="container grid">
                    <div className="col-0-sm col-1-md col-2-lg bg-columns"></div>

                    <div className="col-12 col-10-md col-8-lg">
                        <section>
                            <img class="header-image" src={homeHeaderImage} alt="" />
                            <h1>home</h1>

                            <p>Hi! I'm Branden. I go by the username taito online, but feel free to refer me by either name. I am currently studying media / web design in Vancouver, BC.</p>

                            <p>I have interests in motion design, front end web development, fundamentals of UI/UX design, and occasionally dabble in anime style illustration.</p>

                            <p>My current life motto is finding magic in the mundane. I've always spent a lot of time online, playing competitive games ranging between FPS and rhythm games which by a little more than just chance, led me to where I am now.  </p>
                        </section>

                        <hr className="divider" />

                        <section>
                            <h2>works</h2>

                            <div classname="works">
                                <div className="work-year">
                                    <h3 className="year">2024</h3>
                                    <div className="work-item">
                                        <strong>“BH Cringe Compilation 3”</strong>
                                        <p>— Video Direction; Compositing, Effects</p>
                                    </div>
                                    <div className="work-item">
                                        <strong>Responsive Travel Blog Page</strong>
                                        <p>— Website Creation + Design, Photography</p>
                                    </div>
                                    <div className="work-item">
                                        <strong>Broye Cafe Mobile App Redesign</strong>
                                        <p>— UIUX Case Study, Mobile App UI Redesign</p>
                                    </div>
                                </div>

                                <div className="work-year">
                                    <h3 className="year">2023</h3>
                                    <div className="work-item">
                                        <strong>Recreating “Geometry Dash” in Javascript</strong>
                                        <p>— Game Design on Web, Animation with JS</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </main>
        </>
    );
}

export default Home;