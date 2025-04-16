import "./Home.css";
import homeHeaderImage from '../assets/home_header.png'
import homeHeaderImageAlt from '../assets/home_header_alt.png'
import SkillSet from "../components/Skills";

function Home() {
    return (
        <>
            <main className="home">
                <div className="container grid">
                    <div className="col-0-sm col-1-md col-2-lg bg-columns"></div>

                    <div className="col-12 col-10-md col-8-lg">
                        <section>
                            <picture>
                                {/* When the screen width is 800px or less, use the alternative image */}
                                <source media="(max-width: 768px)" srcSet={homeHeaderImageAlt} />
                                <img className="header-image" src={homeHeaderImage} alt="Home header" />
                            </picture>
                            <h1>home</h1>

                            <p>Hi! I'm Branden. I go by the username taito online, but feel free to refer me by either name. I have a quite a bit I'd be happy to share with you in the little time we have here, so let me tell you a bit more about myself.</p>

                            <p>I'd like to consider myself an ambitious individual. I have interests in visual design, motion design, front end web development, fundamentals of UI/UX design, and occasionally dabble in anime style illustration. My current life motto is <span class="highlighted">finding magic in the mundane. </span> </p>

                            <p>I've always spent a lot of time online, playing competitive games ranging between FPS and rhythm games, which partially played a part in influencing the path towards where I am now. </p>

                            <h2>my skillset:</h2>
                            <SkillSet />
                        </section>

                        <hr className="divider" />

                        <section>
                            <h2>works</h2>

                            <div classname="works">
                                <div className="work-year">
                                    <h3 className="home-year">2025</h3>
                                    <div className="work-item">
                                        <strong>AMV Motion Graphic</strong>
                                        <p>— Animation, Heavy Visual Effects, Compositing</p>
                                    </div>
                                </div>

                                <div className="work-year">
                                    <h3 className="home-year">2024</h3>
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
                                    <h3 className="home-year">2023</h3>
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