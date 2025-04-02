import firstImage from '../../assets/works_cc3.png';
import "./../Works.css";

import Breadcrumbs from '../../components/Breadcrumbs';
import GoBackButton from "../../components/BackButton";

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
                                <h1 class="work-title">"BH Cringe Compilation 3"</h1>
                                <p class="work-title-sub"><span class="highlighted"><strong>#misc</strong> | 3 min read</span></p>
                            </div>

                            <div className="project-card">
                                <div class="video-container">
                                    <iframe
                                        src="https://www.youtube.com/embed/0J2IJiBxSZc?si=tY4YPg7q3PPN_K5s"
                                        title="YouTube"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="project-journey">
                                    <section>
                                        <h2>Briefing:</h2>
                                        <p>
                                            Towards the start of my winter break in 2024— and being inspired by maximalist graphic video edits I watched on YouTube around that time, I was looking to venture through After Effects to try and create visuals that would be used for a larger project featuring a variety of video games I had played with my friends over the past 2 years. As this project would be a continuation of a series I began 4 years ago, I was motivated with committing to releasing it on New Year's to watch with my friends.
                                        </p>
                                    </section>

                                    <section>
                                        <h2>The Process:</h2>
                                        <p>
                                            As winter break was approaching around the 14th of December, I had given myself around a 2.5 week deadline to compose a video with software I was only half familiar with. In my free time day by day, I would be pouring hours in viewing and trimming a large amount of footage across different video games I captured previously.
                                        </p>
                                        <p>
                                            I started off with having multiple songs across the project timeline, and adding my trimmed clips into where I felt fit best by intuition. As there was no criteria given and no guidelines to follow, there was a lot of going back and forth between where to cut and place clips. Furthermore, I had a few of my friends contribute by providing their own smaller scale edits for me to use in the video which further motivated me to push through with the project.
                                        </p>
                                        <p>
                                            After having put together multiple sequences with completed footage and audio, I began post production editing utilizing captions, sound effects, and some visual effects through After Effects which eventually led to the final product the video is now. As a last minute addition, I would be using Photoshop to create a flashy thumbnail that underwent multiple iterations as well.
                                        </p>
                                    </section>

                                    <section>
                                        <h2>Challenges:</h2>
                                        <p>
                                            As this was intended to be viewed at my friend's house during our New Year's gathering, I would be rendering the final product away from home and had to use a remote control application on my PC to finalize and submit the video. Unfortunately, multiple errors occurred while trying to render the video while I was out of the house and that led to a slight delay with the release of the project. Though in the end, everything worked out fine thankfully.
                                        </p>
                                    </section>

                                    <section>
                                        <h2>My Takeaways:</h2>
                                        <p>
                                            I initially only anticipated the length of this project being 25 minutes max, but even I surprised myself with the final outcome. Through countless hours in such a short amount of time, I was able to permanently transition out of my comfort zone using Sony Vegas for putting clips together and picked up on using the workspace of Adobe Premiere and After Effects. Using Media Encoder was a bit troublesome, but I understand how it works now as well. Overall, I was able to put my video compositing speed to the limit with this project, and now I feel much more confident in my speed working with Premiere.
                                        </p>
                                        <p>
                                            After somewhat experiencing it myself in hindsight, following deadlines as an editor can seem really stressful, and I think an editor will always be fighting against time to get things perfect. While rewatching my final product a few times, I definitely noticed that there could have been a few improvements here and there to it but was okay with it knowing I finished the project in time.
                                        </p>
                                    </section>

                                    <section>
                                        <h2>Outcome:</h2>
                                        <p>
                                            Though not monetizable due to song copyright, I was happy with the accomplishment. The rendered video would end up taking around 50GB of space, and though it did not render on time for the New Year's party unfortunately, the payoff and satisfaction from the watch party session my friends and I ended up having was worth the wait. I was happy with the final product, and feel like this is only really the beginning with where my editing skills are at as I want to look even further into After Effects towards the future.
                                        </p>
                                    </section>
                                </div>

                            </div>

                            <div className="image-container">
                                <img src={firstImage} alt="" />
                            </div>
                            <GoBackButton />
                        </section>
                    </div>

                    <div className="col-2 bg-columns">
                    </div>
                </div>
            </main>
        </>
    );
}

export default Works;
