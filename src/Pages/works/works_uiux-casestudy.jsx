import "./../Works.css";

import Breadcrumbs from '../../components/Breadcrumbs';
import GoBackButton from "../../components/BackButton";
import headerImage from "../../assets/uiux1page_header.jpg";
import workImage from "../../assets/uiux1page_work.png"

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
                                <h1 class="work-title">Broye Cafe Mobile App Redesign</h1>
                                <p class="work-title-sub"><span class="highlighted"><strong>#uiux</strong> | 2 min read</span></p>
                            </div>

                            <div>
                                <div className="image-container">
                                    <img src={headerImage} alt="a photoshot of Broye Cafe Downtown's interior." />
                                </div>
                                <div className="project-journey">
                                    <section>
                                        <p>
                                            In my UIUX 1 class at BCIT, I was assigned with the challenge of redesigning a mobile app for food ordering that I thought could use improvements, and creating a case study to document the process.
                                        </p>

                                        <h2>The Beginning</h2>
                                        <p>
                                            While coming up with what I would end up remaking, I thought about trying to find food ordering mobile applications from lesser known brands as they're likely much more rigid in their designs. I would end up picking Broye Cafe's mobile app– a Vietnamese / Japanese fusion cafe I discovered by chance while getting lunch on BCIT's downtown campus.
                                        </p>

                                        <div className="image-container">
                                            <img src={workImage} alt="multiple screenshots of the workflow throughout the project" />
                                        </div>

                                        <h2>The Making</h2>
                                        <p>
                                            The app itself featured several flaws and appeared as though it was created by one person as a side project for fun. Throughout the later half of November 2024 and into the beginning of December, my proposed challenge was answering, “Why have an online order to begin with?”, and I would be trying to solve that with my own rendition of the mobile ordering app through a high fidelity prototype on Figma, influenced by my user research that would later be documented along with it. As I was relatively new with Figma at the time, the process with navigating and prototyping was initially pretty slow, though I picked up on the pace after getting a bit of experience in.
                                        </p>

                                        <h2>Takeaways</h2>
                                        <p>
                                            I would be going back and forth managing multiple skills and roles for this project without even realizing it, and that there were multiple takeaways from this. For one, I now had a grasp on how much time and dedication gets put into designing mobile applications, and the processes it takes to get what your audience actually wants versus what you think they want.
                                        </p>

                                        <h2>Outcome</h2>
                                        <p>
                                            With around 20 hours of project work done, my case study and prototype on Broye Cafe's mobile app was finished. This project was sort of like opening Pandora's Box for me, in a sense that it broadened my perspective with mobile apps and how I would want to think about how I could improve different apps when using them. I found this project to be a beneficial learning experience for myself as there were several different aspects of skills utilized in this project– with several aspects I've only briefly worked with before being improved on, (User Research and Testing, Prototyping, Documenting).
                                        </p>

                                    </section>
                                </div>
                            </div>

                            <div>
                                <a class="work-link" href="https://drive.google.com/file/d/1st6S8jlqk3s6b8fs0OnWwsgL-t0zFo54/view?usp=sharing" target="_blank">Link to Report</a>
                            </div>
                            <div>
                                <a class="work-link" href="https://www.figma.com/design/29rKet7f6eW74mOeMVAH0N/UIUX-P2---High-Fid-Prototype?node-id=0-1&p=f&t=g41UZDrmEnRuxOQM-0" target="_blank" >Link to Figma File</a>
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
