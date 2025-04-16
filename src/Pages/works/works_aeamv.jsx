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
                                <h1 class="work-title">"AMV Motion Graphic"</h1>
                                <p class="work-title-sub"><span class="highlighted"><strong>#visual</strong> | 0 min read</span></p>
                            </div>

                            <div className="">
                                <div class="video-container">
                                    <iframe
                                        src="https://www.youtube.com/embed/4g5YGZ_IpQA?si=elkhtzUsMYEqfW3z&amp;start=40" 
                                        title="YouTube"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="project-journey">
                                    <section>
                                        <p>
                                            Motion Graphics Term Project
                                        </p>                         
                                    </section>
                                </div>

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
