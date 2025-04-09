import ScrollToTop from "../components/ScrollTop";

import aboutHeaderImage from "../assets/about_header.png";
import aboutFirstImage from "../assets/about_neighbourhood.png";
import aboutSecondImage from "../assets/about_centralpark.png";
import aboutThirdImage from "../assets/about_roundmirror.png"

function About() {
    return (
        <>
            <main className="about">
                <div className="container">
                    <div className="grid">
                        <div className="col-0-sm col-1-md col-2-lg bg-columns"></div>

                        <div className="col-12 col-10-md col-8-lg">
                            <section>
                                <img class="header-image" src={aboutHeaderImage} alt="" />
                                <h1>about</h1>

                                <p>
                                    Having grown up in the neighbourhood of Kensington Cedar Cottage, I am native to <span class="highlighted">Vancouver, BC</span>  and have a Vietnamese/ Chinese background, though I am only fluent in the former. I currently live life as a student at BCIT's downtown campus.
                                </p>
                                {/* <img src={aboutFirstImage} alt="" /> */}
                                {/* to replace with slider in the future */}

                                <p>
                                    I would like to describe myself as an introverted individual with a sense of humour (hopefully!) and a passion towards creative works. I am a laid back person with a background in gaming and anime culture, with an <span class="highlighted">ambition towards delving deeper into the world of creative works and design</span>. I've always spent a lot of time online, playing competitive games ranging between FPS and rhythm games which by chance and coincidence led me to where I am now.
                                </p>


                                <p>
                                    Throughout my high school years, I spent much of my free time (gaming, and) studying how to use creative tools, and excelled in working with media works such as <span class="highlighted">video editing and photography</span> / photoshop thinking it was only a side hobby.
                                </p>


                                <p>
                                    When I realized I had built a foundation of transferable skills (and after a painful year of doing computer science), I decided to make the switch of <span class="highlighted">pursuing my high school passions</span>, leading to what I am doing currently.
                                </p>

                                <img src={aboutSecondImage} alt="" />

                                <p>
                                    I'd like to believe that I've always had an interest in doing creative works somewhere in the back of my mind, but never really committed to the full push of acting on it until much more recently. Influenced through a combination of a <span class="highlighted">long history</span> with gaming, interest in <span class="highlighted">anime style art</span> and by extension, <span class="highlighted">design works</span> I've come across on <span class="highlighted">Twitter</span> and <span class="highlighted">YouTube</span>, I was able to roughly chart out this future path of doing creative works for myself. Besides, I think working in design just seems really cool overall!
                                </p>

                                <p>My current life motto is <span class="highlighted">finding magic in the mundane.</span></p>

                                <img src={aboutThirdImage} alt="" />

                                <p>What does Taito mean? <br></br>
                                    <strong>台頭 (Taitō) —</strong> rise of; appearance of; raising one's head; coming to power; becoming famous; (being in the) forefront; prominence.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default About;
