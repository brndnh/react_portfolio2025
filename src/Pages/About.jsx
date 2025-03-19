import Header from "../global/Header";
import Footer from "../global/Footer";

import aboutHeaderImage from "../assets/home_header.png";
function About() {
    return (
        <>
            <Header />

            <main className="about">
                <div className="container">
                    <div className="grid">
                        <div className="col-2 bg-columns">
                        </div>

                        <div className="col-8">
                            <section>
                                <img class="header-image" src={aboutHeaderImage} alt="" />
                                <h1>about</h1>
                                <br></br>
                                <p>
                                    A bit about me; having grown up in the neighbourhood of Kensington Cedar Cottage, I am native to Vancouver, BC and have a Vietnamese/ Chinese background, though I am only fluent in the former. I currently live life as a student at BCIT's downtown campus.
                                </p>
                                <br></br>

                                <p>
                                    I would like to describe myself as an introverted individual with a sense of humour (hopefully!) and a passion towards creative works. I am a laid back person with a background in gaming and anime culture, with an ambition towards delving deeper into the world of creative works and design. I've always spent a lot of time online, playing competitive games ranging between FPS and rhythm games which by chance and coincidence led me to where I am now.
                                </p>
                                <br></br>

                                <p>
                                    Throughout my high school years, I spent much of my free time (gaming, and) studying how to use creative tools, and excelled in working with media works such as video editing and photography / photoshop thinking it was only a side hobby.
                                </p>
                                <br></br>
                                
                                <p>When I realized I had built a foundation of transferable skills (and after a painful year of doing computer science), I decided to make the switch of pursuing my high school passions, leading to what I am doing currently. 
                                </p>

                                <img src="" alt="" />

                                <p>I'd like to believe that I've always had an interest in doing creative works somewhere in the back of my mind, but never really committed to the full push of acting on it until much more recently. Influenced through a combination of a long history with gaming, interest in anime style art and by extension, design works I've come across on Twitter and YouTube, I was able to roughly chart out this future path of doing creative works for myself. Besides, I think working in design just seems really cool overall!</p>

                                <p>My current life motto is finding magic in the mundane.</p>
                                
                                <img src="" alt="" />

                                <p>What does Taito mean?<br></br>
                                台頭 (Taitō) — rise of; appearance of; raising one's head; coming to power; becoming famous; (being in the) forefront; prominence.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default About;
