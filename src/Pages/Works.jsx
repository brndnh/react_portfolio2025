import { NavLink } from 'react-router';

import firstImage from '../assets/works_cc3.png';
import secondImage from '../assets/works_responsiveTravel.png'
import thirdImage from '../assets/works_uiProject.png'
import fourthImage from '../assets/works_jsProject.png'


import { ArrowForwardCircleOutline } from 'react-ionicons';
import "./Works.css";

function Works() {
    return (
        <>
            <main className="about">
                <div className="container">
                    <div className="grid">
                        <div className="col-1-sm col-2-md col-3-lg bg-columns">
                        </div>

                        <div className="col-10-sm col-8-md col-6-lg">
                            <section>
                                <hr className="long-divider" />
                                <div class="work-filters">
                                    <nav>
                                        <ul className="nav-list">
                                            <li><a href="/">#frontend</a></li>
                                            <li><a href="/">#visual</a></li>
                                            <li><a href="/">#uiux</a></li>
                                            <li><a href="/">#misc</a></li>
                                        </ul>
                                    </nav>
                                </div>

                                {/* project cards */}
                                <div className="project-card">
                                    <div className="image-container">
                                        <img src={firstImage} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="title">
                                            “BH Cringe Compilation 3” <span className="tag">#misc</span>
                                        </h3>
                                        <p className="description">— Video Direction; Compositing, Effects</p>

                                        <div className="card-footer">
                                            <p className="year">2024</p>

                                            <button className="view-project">
                                                <NavLink
                                                    to="/Works/Works_cc3"
                                                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                                                >
                                                    <ArrowForwardCircleOutline color={"#000"} height="60px" width="60px" />
                                                </NavLink>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-card">
                                    <div className="image-container">
                                        <img src={secondImage} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="title">
                                            Responsive Travel Blog Page <span className="tag">#frontend</span>
                                        </h3>
                                        <p className="description">— Website Creation + Design, Photography</p>

                                        <div className="card-footer">
                                            <p className="year">2024</p>

                                            <button className="view-project">
                                                <NavLink
                                                    to="/Works/"
                                                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                                                >
                                                    <ArrowForwardCircleOutline color={"#000"} height="60px" width="60px" />
                                                </NavLink>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-card">
                                    <div className="image-container">
                                        <img src={thirdImage} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="title">
                                            Broye Cafe Mobile App Redesign <span className="tag">#uiux</span>
                                        </h3>
                                        <p className="description">— UIUX Case Study, Mobile App UI Redesign</p>

                                        <div className="card-footer">
                                            <p className="year">2024</p>

                                            <button className="view-project">
                                                <NavLink
                                                    to="/Works/"
                                                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                                                >
                                                    <ArrowForwardCircleOutline color={"#000"} height="60px" width="60px" />
                                                </NavLink>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-card">
                                    <div className="image-container">
                                        <img src={fourthImage} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="title">
                                            Recreating “Geometry Dash” in Javascript <span className="tag">#frontend</span>
                                        </h3>
                                        <p className="description">— Game Design on Web, Animation with JS</p>

                                        <div className="card-footer">
                                            <p className="year">2023</p>

                                            <button className="view-project">
                                                <NavLink
                                                    to="/Works/"
                                                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                                                >
                                                    <ArrowForwardCircleOutline color={"#000"} height="60px" width="60px" />
                                                </NavLink>
                                            </button>
                                        </div>
                                    </div>
                                </div>


                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Works;
