import "./../Works.css";

import Breadcrumbs from '../../components/Breadcrumbs';
import GoBackButton from "../../components/BackButton";

import headerImage from '../../assets/travelpage_main.png';
import workImage from "../../assets/travelpage_work.png";
import outroImage from "../../assets/travelpage_outro.png"

function Works() {
    return (
        <>
            <main className="about">
                <div className="container grid">
                    <div className="col-1 col-2-lg bg-columns">
                    </div>

                    <div className="col-10 col-8-lg">
                        <section>
                            <hr className="long-divider" />

                            <div>
                                <Breadcrumbs />
                                <h1 class="work-title">Responsive Travel Blog Page</h1>
                                <p class="work-title-sub"><span class="highlighted"><strong>#frontend</strong> | 2 min read</span></p>
                            </div>

                            <div>
                                <div className="image-container">
                                    <img src={headerImage} alt="collection of screenshots featuring what the site looks like" />
                                </div>
                                <div className="project-journey">
                                    <section>
                                        <p>
                                            In my first web scripting class at BCIT, I was to create a responsive website with JavaScript plugins for my term project. Though my class was given the choice to reuse a previous project that followed a similar criteria, I would end up coding this assignment from the ground up as practice, and because I thought I could write up a cleaner code for this assignment.
                                        </p>

                                        <h2>The Inspiration</h2>
                                        <p>
                                            Previously inspired by a friend of mine creating a Japan travel blog of their own on a personal website, I decided I would be attempting to create a layout in which I could use in the future to write and format my own travel blog detailing my trip in Japan and South Korea in 2023. This would set the foundation for the blog I intend on fully filling out with a higher level of detail during my free time in the future.
                                        </p>

                                        <div className="image-container">
                                            <img src={workImage} alt="visual studio code screenshots of code used to make the website." />
                                        </div>

                                        <h2>The Process</h2>
                                        <p>
                                            During the later half of November 2024, I would be jumping back and forth figuring out what plugins could compliment the project I was working on. I initially began this project reusing a previous assignment as a skeleton, but found that it was not the best fit to work with, which led me to pivot and start over. There was a handful of trial and error, going all over the place with handling responsive design and plugins, as I had very limited experience working with the two previously. Eventually I settled on using six different plugins to enhance what would be the final product for the term project.
                                        </p>

                                        <h2>Takeaways</h2>
                                        <p>
                                            Starting over from scratch after creating another project that had half similar expectations was a beneficial test I put on myself. As I was creating something I wanted to showcase to a public audience in the future (my friend who inspired me being one of them), I wanted to ensure that the project would be fully functional while keeping the design aspect matching my style in mind. Through this project, I began understanding the fundamentals for how plugins worked, and how they could easily improve a coding project by implementing things that I may have thought might not have been possible.
                                        </p>

                                        <h2>Outcome</h2>
                                        <p>
                                            Overall, being completed from the ground up with a limited time frame, I found this term project beneficial as it tested my problem solving skills with JavaScript. Furthermore, this term project revolving around responsive design and what elements would look like on different screen sizes was very insightful for me, as it was not a concept I had taken into account previously.
                                        </p>

                                        <div className="image-container">
                                            <img src={outroImage} alt="a close up of the home page created in this project." />
                                        </div>
                                    </section>
                                </div>
                            </div>

                            <div>
                                <a class="work-link" href="https://github.com/brndnh/ws-tp" target="_blank" >Link to Project Repository</a>
                            </div>

                            <GoBackButton />
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Works;
