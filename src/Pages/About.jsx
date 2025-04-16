import aboutHeaderImage from "../assets/about_header.png";
import aboutPhotoshopImage from "../assets/about_photoshop.jpg"
import aboutSelfieImage from "../assets/about_roundmirror.png"
import aboutFooterImage from "../assets/about_header2.png"

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
                                    I would like to describe myself as an introverted individual with a sense of humour (hopefully!) and a passion towards creative works. I have a background in gaming and anime culture, with a growing <span class="highlighted">ambition towards delving deeper into the world of creative works and design</span>.
                                </p>

                                <p>
                                    I'd like to recognize <span class="highlighted">adaptability</span> as an important trait to have as a person– especially so in a fast paced work environment that is constantly changing. Adaptability to me acts as a packaged bundle– it includes <span class="highlighted">being respectful and open minded towards change and criticism</span>.
                                </p>

                                <p>
                                    Though it isn't to an extreme extent, I have grown up shuffling through several different environments in my life. Being able to see the differences between place A to place B, and even cultural differences across the few different places I've been to around the world, <span class="highlighted">I value perspectives</span>; being able to indulge in different experiences only widens my view of the world.
                                </p>

                                <p>
                                    I want to try my best to always be a person who is open minded and <span class="highlighted">willing to work with change</span>, establishing a sense of communication and trust.
                                </p>

                                <img src={aboutPhotoshopImage} alt="screenshot of a photoshop piece created back in 2017." />

                                <p>
                                    Throughout my high school years, I spent much of my free time (gaming, and) studying how to use creative tools, and excelled in working with media works such as <span class="highlighted">video editing and photography</span> / photoshop thinking it was only a side hobby. When I realized I had built a foundation of transferable skills (and after a painful year of doing computer science), I decided to make the switch of <span class="highlighted">pursuing my high school passions</span>, leading to what I am doing currently.
                                </p>

                                <p>
                                    I'd like to believe that I've always had an interest in doing creative works somewhere in the back of my mind, but never really committed to the full push of acting on it until much more recently. Influenced through a combination of a <span class="highlighted">long history</span> with gaming, interest in <span class="highlighted">anime style art</span> and by extension, <span class="highlighted">design works</span> I've come across on <span class="highlighted">Twitter</span> and <span class="highlighted">YouTube</span>, I was able to roughly chart out this future path of doing creative works for myself. Besides, I think working in design just seems really cool overall!
                                </p>

                                <p>
                                    I want to be remembered for my displays of (hopefully) memorable works that reflect passion, and my image as a person beyond the screen through good communication.
                                </p>

                                <p>
                                    When you are passionate about what you do, it doesn't feel like work. As someone who is currently studying in the field of creative works and design, I hope to be constantly learning new things and inspiring others with what I am able to output from my studies.
                                </p>

                                <img src={aboutSelfieImage} alt="" />

                                <p>What does taito mean? <br></br>
                                    <strong>台頭 (taitō) —</strong> rise of; appearance of; raising one's head; coming to power; becoming famous; (being in the) forefront; prominence.
                                </p>
                                <img src={aboutFooterImage} alt="" />
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default About;
