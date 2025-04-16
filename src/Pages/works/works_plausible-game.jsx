import "./../Works.css";

import Breadcrumbs from '../../components/Breadcrumbs';
import GoBackButton from "../../components/BackButton";
import workImage from "../../assets/gdgamepage_work.png";

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
                                <h1 class="work-title">"Recreating “Geometry Dash” in Javascript"</h1>
                                <p class="work-title-sub"><span class="highlighted"><strong>#frontend</strong> | 2 min read</span></p>
                            </div>

                            <div className="">
                                <div class="video-container">
                                    <iframe
                                        src="https://www.youtube.com/embed/PC8UU00PR8c?si=8Nw0pAn25ckpj0Je"
                                        title="YouTube"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="project-journey">
                                    <section>
                                        <p>
                                            During my first class of Web Programming at Langara, I was tasked with a large assignment that was intended to be completed with another person. My classmate Andrei and I would be working together for this project.
                                        </p>

                                        <h2>The Process</h2>
                                        <p>
                                            Initially, we began with listing off various different games with a level of complexity that we could recreate, starting off with Chess, then a Pokemon battle simulation, but then eventually decided on attempting to recreate what playing a level through the mobile game “Geometry Dash” would be like.
                                        </p>

                                        <h2>The Roadway</h2>
                                        <p>
                                            During the month of November 2023, Andrei and I would join voice call sessions discussing what needed to be implemented and adjusted after class days were over. The two of us would juggle code around in Visual Studio Code– taking turns problem solving what worked and what code needed problem solving while also learning more about Javascript at the same time. Other times, we would alternate taking turns implementing small amounts of new/adjusted code and sending the updated project file to one another over Discord, which is why the file history on GitHub is slightly empty.
                                        </p>

                                        <div className="image-container">
                                            <img src={workImage} alt="multiple screenshots of the workflow throughout the project" />
                                        </div>

                                        <h2>Takeaways</h2>
                                        <p>
                                            There was a lot of struggle in between, as we were partially working with concepts that were not taught in the course. For instance, and though it may not be the most practical, we were animating with the draw functions in Javascript canvas to produce animations on the screen. Another concept I was unfamiliar with at the time were arrays and switch statements, which I ended up self-learning through trial and error testing in this project.
                                        </p>

                                        <h2>Outcome</h2>
                                        <p>
                                            After around 24 hours of project work, our product of recreating Geometry Dash gameplay was complete. As there were many different elements to consider for the game to properly run and though it could likely be optimized further, it was a great learning experience for myself as I’ve never worked with such a large scale project before.
                                        </p>
                                    </section>
                                </div>
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
