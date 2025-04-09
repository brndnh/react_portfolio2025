import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { ArrowForwardCircleOutline } from 'react-ionicons';
import firstImage from '../assets/works_cc3.png';
import secondImage from '../assets/works_responsiveTravel.png';
import thirdImage from '../assets/works_uiProject.png';
import fourthImage from '../assets/works_jsProject.png';
import "./Works.css";

function Works() {
    // Track the selected filter.
    const [selectedFilter, setSelectedFilter] = useState('all');

    const worksData = [
        {
            title: "“BH Cringe Compilation 3”",
            image: firstImage,
            tag: "#misc",
            description: "— Video Direction; Compositing, Effects",
            year: "2024",
            navLink: "/works/works_cc3",
        },
        {
            title: "Responsive Travel Blog Page",
            image: secondImage,
            tag: "#frontend",
            description: "— Website Creation + Design, Photography",
            year: "2024",
            navLink: "/Works/",
        },
        {
            title: "Broye Cafe Mobile App Redesign",
            image: thirdImage,
            tag: "#uiux",
            description: "— UIUX Case Study, Mobile App UI Redesign",
            year: "2024",
            navLink: "/Works/",
        },
        {
            title: "Recreating “Geometry Dash” in Javascript",
            image: fourthImage,
            tag: "#frontend",
            description: "— Game Design on Web, Animation with JS",
            year: "2023",
            navLink: "/Works/",
        },
    ];

    const filteredWorks =
        selectedFilter === 'all'
            ? worksData
            : worksData.filter((work) => work.tag === selectedFilter);

    return (
        <main className="about">
            <div className="container">
                <div className="grid">
                    <div className="col-1-sm col-2-md col-3-lg bg-columns"></div>
                    <div className="col-10-sm col-8-md col-6-lg">
                        <section>
                            <hr className="work-divider" />
                            <div className="work-filters">
                                <nav>
                                    <ul className="nav-list">
                                        <li>
                                            <button
                                                type="button"
                                                onClick={() => setSelectedFilter('all')}
                                                className={selectedFilter === 'all' ? 'active' : ''}
                                            >
                                                all
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                onClick={() => setSelectedFilter('#frontend')}
                                                className={selectedFilter === '#frontend' ? 'active' : ''}
                                            >
                                                #frontend
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                onClick={() => setSelectedFilter('#visual')}
                                                className={selectedFilter === '#visual' ? 'active' : ''}
                                            >
                                                #visual
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                onClick={() => setSelectedFilter('#uiux')}
                                                className={selectedFilter === '#uiux' ? 'active' : ''}
                                            >
                                                #uiux
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                onClick={() => setSelectedFilter('#misc')}
                                                className={selectedFilter === '#misc' ? 'active' : ''}
                                            >
                                                #misc
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            {/* Render filtered project cards wrapped in a NavLink */}
                            {filteredWorks.map((work, index) => (
                                <NavLink to={work.navLink} className="project-card-link" key={index}>
                                    <div className="project-card">
                                        <div className="image-container">
                                            <img src={work.image} alt={work.title} />
                                        </div>
                                        <div className="card-content">
                                            <h3 className="title">
                                                {work.title} <span className="tag">{work.tag}</span>
                                            </h3>
                                            <p className="description">{work.description}</p>
                                            <div className="card-footer">
                                                <p className="year">{work.year}</p>
                                            </div>
                                        </div>
                                        {/* Arrow placed in a separate, absolute layer */}
                                        <div className="arrow-layer">
                                            <ArrowForwardCircleOutline
                                                color={"#000"}
                                                height="50px"
                                                width="50px"
                                            />
                                        </div>
                                    </div>
                                </NavLink>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Works;
